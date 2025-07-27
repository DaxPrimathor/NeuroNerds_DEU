import ballerina/http;

service /robot on new http:Listener(9090) {
    resource function get hello(http:Caller caller) returns error? {
        check caller->respond("Ballerina Robot Service");
    }
}