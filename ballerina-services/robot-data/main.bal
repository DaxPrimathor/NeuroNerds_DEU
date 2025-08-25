
import ballerina/http;
import ballerinax/mongodb;

configurable string mongoUri = "mongodb://localhost:27017/robotic_social_db";
configurable string collectionName = "robot_data";

service /robot on new http:Listener(9090) {
    final mongodb:Client mongoClient;

    function init() returns error? {
        self.mongoClient = check new (mongoUri);
    }

    // Save telemetry data
    resource function post telemetry(http:Caller caller, http:Request req) returns error? {
        json payload = check req.getJsonPayload();
        mongodb:Database db = check self.mongoClient->getDatabase("robotic_social_db");
        mongodb:Collection collection = check db->getCollection(collectionName);
        check collection->insert(payload);
        check caller->respond({"message": "Telemetry data saved"});
    }

    // Retrieve all telemetry data
    resource function get telemetry(http:Caller caller) returns error? {
        mongodb:Database db = check self.mongoClient->getDatabase("robotic_social_db");
        mongodb:Collection collection = check db->getCollection(collectionName);
        stream<json, error?> data = check collection->find();
        json[] result = [];
        check from json record in data
            do {
                result.push(record);
            };
        check caller->respond(result);
    }
}