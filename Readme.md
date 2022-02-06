#### PatternAPI
----
1. PatternAPI is a mobile number pattern matching api. This api consist of more than 75 diffeent types of pattern used to write indian mobile numbers. It can validate all of these types of pattern. 
2. It's good to store the numbers in some common format when you are working with a large data-source. 
3. It's not only be used for validating a mobile number pattern bet we can also use it for transforming the incoming pattern into some standerd number format.
----

#### Tools and Libraries use:
1. Express for listening for requests.
2. Middleware for validating reques body.
3. Gulp for automate the building process.
4. Nodemon for auto-build and run on changes.
5. Mocha with chai and istanbul (nyc) for testing and code coverage.
6. Eslint for proper formatting of code.


#### Tools to be use:
1. Docekrization of whole api.
2. Centralized Logging tool.


#### Application Deployed on Heroku server:
##### 1. Validating and transforming a single pattern:
          url: https://patternapi1.herokuapp.com/api/v1/pattern/transformOne
          request body: {
                              "type": "2",  
                              "phone": "9112345678",
                              "index":"3"
                         }
                         
          response: +91-911-2345678
          
##### Validate and transform a list of pattern:
         url : https://patternapi1.herokuapp.com/api/v1/pattern/transformAll
 request body:[
    {
    "type": "2",  
    "phone": "9112345678",
    "index":"5"
    },
     {
     "countryCode":"+91-",
    "type": "2",  
    "phone": "9112345678",
    "index":"3",
    "separator": "-"
    },
    {
    "type": "1", 
    "countryCodeIncluded":true, 
    "phone": "+919112345678"
    },
    {
    "type": "1", 
    "countryCodeIncluded":false, 
    "phone": "+919112345678"
    },
     {
    "type": "1", 
    "countryCodeIncluded":false, 
    "phone": "+919112345678"
    }
]

respons: [
    "+91-91123-45678",
    "+91-911-2345678",
    "+919112345678",
    "Not a Valid Phone Number Pattern",
    "Not a Valid Phone Number Pattern"
]
          
