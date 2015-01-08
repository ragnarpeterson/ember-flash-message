# ember-flash-message

Super simple flash messages for your Ember app.

## Installation

```bash
# From within your ember-cli project
ember install:addon ember-flash-message
```

## Usage

In `application.hbs`:

```hbs
{{flash-message}}
```

Then, from within any route, controller, or component:

```javascript
this.flash.notice('a notice message');
this.flash.success('a success message');
this.flash.failure('a failure message');
```

By default, the message will appear for 3 seconds. If you would like to change this, simply pass the duration (in milliseconds) as the second argument:

```javascript
this.flash.success('a success message', 5000);
```

Styling can easily be overridden. Take a look in `vendor/ember-flash-message/app.css` to get an idea.
