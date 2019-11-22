# lightweight-form-validator
Incredibly simple and lightweight HTML forms validator using Javascript and native browser validation

# How it works?
Very simple! it uses the native `setCustomValidity` function to make the browser display the error messages without any extra html elements.

# How to use it?
Just add the Javascript file in your header or honestly just copy it, it is very short and simple.

Then simply initiate it, here's an example :

```javascript
new FormValidator('my-form-id', [
    {
        //Function that should return true if an error is to be shown
        condition : elements => elements.start_date.valueAsDate >= elements.end_date.valueAsDate,
        //Element where the message will be displayed
        element : 'start_date',
        //Message to be displayed
        message : 'Start date must be before end date'
    }
])
```

The first argument is the id of the form,
The second is an array of conditions, the comments above explain how to use it.
