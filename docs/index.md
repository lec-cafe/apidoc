FORMAT: 1A

# Resource and Actions API
This API example demonstrates how to define a resource with multiple actions.

## API Blueprint
+ [Previous: The Simplest API](01.%20Simplest%20API.md)
+ [This: Raw API Blueprint](https://raw.github.com/apiaryio/api-blueprint/master/examples/02.%20Resource%20and%20Actions.md)
+ [Next: Named Resource and Actions](03.%20Named%20Resource%20and%20Actions.md)

# /message
This is our [resource](http://www.w3.org/TR/di-gloss/#def-resource). It is defined by its [URI](http://www.w3.org/TR/di-gloss/#def-uniform-resource-identifier) or, more precisely, by its [URI Template](http://tools.ietf.org/html/rfc6570).

This resource has no actions specified but we will fix that soon.

## GET
Here we define an action using the `GET` [HTTP request method](http://www.w3schools.com/tags/ref_httpmethods.asp) for our resource `/message`.

As with every good action it should return a [response](http://www.w3.org/TR/di-gloss/#def-http-response). A response always bears a status code. Code 200 is great as it means all is green. Responding with some data can be a great idea as well so let's add a plain text message to our response.

+ Response 200 (text/plain)

        Hello World!

## PUT
OK, let's add another action. This time to put new data to our resource (essentially an update action). We will need to send something in a [request](http://www.w3.org/TR/di-gloss/#def-http-request) and then send a response back confirming the posting was a success (HTTP Status Code 204 ~ Resource updated successfully, no content is returned).

+ Request (text/plain)

        All your base are belong to us.

+ Response 204

FORMAT: 1A

# Named Resource and Actions API
This API example demonstrates how to name a resource and its actions, to give the reader a better idea about what the resource is used for.

## API Blueprint
+ [Previous: Resource and Actions](02.%20Resource%20and%20Actions.md)
+ [This: Raw API Blueprint](https://raw.github.com/apiaryio/api-blueprint/master/examples/03.%20Named%20Resource%20and%20Actions.md)
+ [Next: Grouping Resources](04.%20Grouping%20Resources.md)

# My Message [/message]
OK, `My Message` probably isn't the best name for our resource but it will do for now. Note the URI `/message` is enclosed in square brackets.

## Retrieve a Message [GET]
Now this is informative! No extra explanation needed here. This action clearly retrieves the message.

+ Response 200 (text/plain)

        Hello World!

## Update a Message [PUT]
`Update a message` - nice and simple naming is the best way to go.

+ Request (text/plain)

        All your base are belong to us.

+ Response 204

FORMAT: 1A

# Grouping Resources API
This API example demonstrates how to group resources and form **groups of resources**. You can create as many or as few groups as you like. If you do not create any group all your resources will be part of an "unnamed" group.

## API Blueprint
+ [Previous: Named Resource and Actions](03.%20Named%20Resource%20and%20Actions.md)
+ [This: Raw API Blueprint](https://raw.github.com/apiaryio/api-blueprint/master/examples/04.%20Grouping%20Resources.md)
+ [Next: Responses](05.%20Responses.md)

# Group Messages
Group of all messages-related resources.

This is the first group of resources in this document. It is **recognized** by the **keyword `group`** and its name is `Messages`.

Any following resource definition is considered to be a part of this group until another group is defined. It is **customary** to increase header level of resources (and actions) nested under a resource.

## My Message [/message]

### Retrieve a Message [GET]

+ Response 200 (text/plain)

        Hello World!

### Update a Message [PUT]

+ Request (text/plain)

        All your base are belong to us.

+ Response 204

# Group Users
Group of all user-related resources.

This is the second group in this blueprint. For now, no resources were defined here and as such we will omit it from the next installement of this course.

FORMAT: 1A

# Responses API
In this API example we will discuss what information a response can bear and how to define multiple responses. Technically a response is represented by a payload that is sent back in response to a request.

## API Blueprint
+ [Previous: Grouping Resources](04.%20Grouping%20Resources.md)
+ [This: Raw API Blueprint](https://raw.github.com/apiaryio/api-blueprint/master/examples/05.%20Responses.md)
+ [Next: Requests](06.%20Requests.md)

# Group Messages
Group of all messages-related resources.

## My Message [/message]

### Retrieve a Message [GET]
This action has **two** responses defined: One returing a plain text and the other a JSON representation of our resource. Both has the same HTTP status code. Also both responses bear additional information in the form of a custom HTTP header. Note that both responses have set the `Content-Type` HTTP header just by specifying `(text/plain)` or `(application/json)` in their respective signatures.

+ Response 200 (text/plain)

    + Headers

            X-My-Message-Header: 42

    + Body

            Hello World!

+ Response 200 (application/json)

    + Headers

            X-My-Message-Header: 42

    + Body

            { "message": "Hello World!" }

### Update a Message [PUT]

+ Request (text/plain)

        All your base are belong to us.

+ Response 204

FORMAT: 1A

# Requests API
Following the [Responses](05.%20Responses.md) example, this API will show you how to define multiple requests and what data these requests can bear. Let's demonstrate multiple requests on a trivial example of content negotiation.

## API Blueprint
+ [Previous: Responses](05.%20Responses.md)
+ [This: Raw API Blueprint](https://raw.github.com/apiaryio/api-blueprint/master/examples/06.%20Requests.md)
+ [Next: Parameters](07.%20Parameters.md)

# Group Messages
Group of all messages-related resources.

## My Message [/message]

### Retrieve a Message [GET]
In API Blueprint requests can hold exactly the same kind of information and can be described by exactly the same structure as responses, only with different signature – using the `Request` keyword. The string that follows after the `Request` keyword is a request identifier. Again, using an explanatory and simple naming is the best way to go.

+ Request Plain Text Message

    + Headers

            Accept: text/plain

+ Response 200 (text/plain)

    + Headers

            X-My-Message-Header: 42

    + Body

            Hello World!

+ Request JSON Message

    + Headers

            Accept: application/json

+ Response 200 (application/json)

    + Headers

            X-My-Message-Header: 42

    + Body

            { "message": "Hello World!" }

### Update a Message [PUT]

+ Request Update Plain Text Message (text/plain)

        All your base are belong to us.

+ Request Update JSON Message (application/json)

        { "message": "All your base are belong to us." }

+ Response 204

FORMAT: 1A

# Parameters API
In this installment of the API Blueprint course we will discuss how to describe URI parameters.

But first let's add more messages to our system. For that we would need introduce an message identifier – id. This id will be our parameter when communicating with our API about messages.

## API Blueprint
+ [Previous: Requests](06.%20Requests.md)
+ [This: Raw API Blueprint](https://raw.github.com/apiaryio/api-blueprint/master/examples/07.%20Parameters.md)
+ [Next: Attributes](08.%20Attributes.md)

# Group Messages
Group of all messages-related resources.

## My Message [/message/{id}]
Here we have added the message `id` parameter as an [URI Template variable](http://tools.ietf.org/html/rfc6570) in the Message resource's URI.
Note the parameter name `id` is enclosed in curly brackets. We will discuss this parameter in the `Parameters` section below, where we will also set its example value to `1` and declare it of an arbitrary 'number' type.

+ Parameters

    + id: 1 (number) - An unique identifier of the message.

### Retrieve a Message [GET]

+ Request Plain Text Message

    + Headers

            Accept: text/plain

+ Response 200 (text/plain)

    + Headers

            X-My-Message-Header: 42

    + Body

            Hello World!

+ Request JSON Message

    + Headers

            Accept: application/json

+ Response 200 (application/json)

    + Headers

            X-My-Message-Header: 42

    + Body

            {
              "id": 1,
              "message": "Hello World!"
            }

### Update a Message [PUT]

+ Request Update Plain Text Message (text/plain)

        All your base are belong to us.

+ Request Update JSON Message (application/json)

        { "message": "All your base are belong to us." }

+ Response 204

## All My Messages [/messages{?limit}]
A resource representing all of my messages in the system.

We have added the query URI template parameter - `limit`. This parameter is used for limiting the number of results returned by some actions on this resource. It does not affect every possible action of this resource therefore we will discuss it only at the particular action level below.

### Retrieve all Messages [GET]

+ Parameters

    + limit (number, optional) - The maximum number of results to return.
        + Default: `20`

+ Response 200 (application/json)

        [
          {
            "id": 1,
            "message": "Hello World!"
          },
          {
            "id": 2,
            "message": "Time is an illusion. Lunchtime doubly so."
          },
          {
            "id": 3,
            "message": "So long, and thanks for all the fish."
          }
        ]
