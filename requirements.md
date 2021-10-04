# Software Requirements

## Vision

The product will provide the user with a page for relaxation and meditation, including a custom image, time of day appearance, and sound.

The product is meant to solve the pain point of stress in daily working life. It isn't designed to be actively used, but rather to be used on a second screen or side window and a tool for relaxation or focus.

You should care about our product because it helps you relax after a long and stressful day of work. Meditation is proven to reduce blood pressure, increase focus, and can promote a holistic approach to programming.

## Scope

### IN

* The web app will allow users to input preferences for a custom meditation page, and generate that page.
* Users' preferences will be stored upon leaving the page and retrieved upon returning.
* The app will detect the local time of the user and change the sky/color of the page accordingly.
* The app will play relaxing sounds or music according to user input.

### OUT

* The app will not play videos.
* The app will not allow for uploading and playback of custom user media.

### MVP

The MVP functionality is a web based meditation app that allows for custom user pages based on presets. It optionally play relaxing preset sounds or music, and the style of the page will change with time of day upon refresh. User settings will be saved in local storage.

### Stretch Goals

* Dynamically changing style based on time, instead of requiring refresh.
* Spotify integration for custom music/experience.
* Optional mouse control of time of day.
* Mobile compatibility, adaptable to screen size.
* Randomization of page, with option to rotate through periodically.

## Functional Requirements

* A user can customize the appearance of a generated page for relaxation.
  * Music/Sounds
  * Background image
  * Time of day or use local time.
* The app will save user settings to return later.
* The user will have the option to reset the page.

### Data Flow

1. User will arrive at a home page containing a form for submission of page settings.
2. Upon submission, settings will be saved in local storage and user will be redirected to their custom page.
3. At any time, user can return to home page to change settings.
4. If previous settings are detected in storage, home page will allow the user to re-load previous settings.