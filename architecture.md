# Bam Architecture

## Purpose and Scope of the Project

Bam is a federated system for providing alternative representations of mathematical expressions. Each mathematical expression occurring in a document (irrespective of format) is associated with a UUID that can be looked up on a server to obtain alternate representations.

For example, an expression represented in a document as a PNG image could be associated with various alternative forms, e.g., MathML, an SVG image, an audio rendering, a braille rendering, etc. Application logic is responsible for retrieving the alternative form (or forms) desired by the user, e.g., under the control of a configuration option or on a page-by-page or even expression-by-expression basis based on an interactive user interface.

Bam is intended to be federated - that is, a server that fails to find an expression associated with a given ID in its local database can recursively query another server which is upstream of it. In this way, a publisher can host a server for locally produced content while still allowing expressions drawn from other sources (but hosted by the same publisher) to be identified through the use of an upstream server. Fault tolerance is also supported by such a federated arrangement.

The basic premise of Bam is that different representations of mathematical content are needed in order to support users' diverse access requirements. This necessity is expected to remain a constant of mathematics accessibility due to the varying levels of support for different mathematical expression formats in browsers, assistive technologies, Web-based, mobile and desktop applications and other tools. Bam responds to this reality by offering users a choice of mathematical formats while minimizing the burden on the content publisher, who need only supply a standard format such as MathML to the server-side application and attach the ID of each expression to the representation chosen for distribution in the published content.

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
