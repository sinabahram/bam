# ToDo list for BAM

## BAM Server
* RESTful endpoints for:
	** requestID: Requesting a cononical bundle ID
	** component: Retrieving any bundle component given a bundle ID
	** availableComponents: Retrieiving what components are available, given a bundle ID
	** Component types: list component types supported by the server (returns list of
component type identifiers)
* Methodology of generating globally unique IDs
* List of component types
	** ascii
    ** Unicode mathematics [Unicode technical note #28](http://unicode.org/notes/tn28/)
	** audio
	** braille
	** latex
    ** MathML
    ** OpenMath?
	** image // with format modifier (media type)?
		*** bmp
		*** jpg
		*** png
		*** svg

## BAM Frontend (JavaScript bookmarklet for now)?
* Detect any bundle ID's on the page
* Interface to list them
* Interface to change/replace/re-render them across component types
