# ToDo list for BAM

## BAM Server
* RESTful endpoints for:
	** requestID: Requesting a cononical bundle ID
	** component: Retrieving any bundle component given a bundle ID
	** availableComponents: Retrieiving what components are available, given a bundle ID
	** bundle: Retrieving any bundle component(s), as a bundle, given a bundle ID
* Methodology of generating globally unique IDs
* List of component types
	** ascii
	** audio
	** braille
	** latex
	** image // with format modifier?
		*** bmp
		*** jpg
		*** png
		*** svg

## BAM Frontend (JavaScript bookmarklet for now)?
* Detect any bundle ID's on the page
* Interface to list them
* Interface to change/replace/re-render them across component types
