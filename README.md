angular-nicescroll
===================

This directive is for jquery-nicescroll in angular js whithout writing single line of javascript code

----------


Getting Started
-------------

.

####  **bower install**

    bower install angular-nicescroll

####  **npm install**

    npm install angular-nicescroll

####  **add dependency in you module**

    var app=angular.module("you app name",['angular-nicescroll'])
####  **Using directive**

    <div class="my-scroll-area" ng-nicescroll nice-option="{cursorcolor: '#e2edff'}" nice-scroll-top-end="topEndComplete()" nice-scroll-end="endScroll()">


### Documentation


|                  | Option| 
 ----------------- | ---------------------------- | ------------------
| nice-option | `'Any option given below'` 
| nice-scroll-end| `"endScroll()  (function to be called)"`
| nice-scroll-top-end| `"topendScroll()  (function to be called)"` 
| ng-nicescroll | `Initialize the directive` 
| nice-scroll-object | `scopename` can be used for nicescroll event eg: scopename.hide();


    {
        cursorcolor: "#424242", // change cursor color in hex
        cursoropacitymin: 0, // change opacity when cursor is inactive (scrollabar "hidden" state), range from 1 to 0
        cursoropacitymax: 1, // change opacity when cursor is active (scrollabar "visible" state), range from 1 to 0
        cursorwidth: "5px", // cursor width in pixel (you can also write "5px")
        cursorborder: "1px solid #fff", // css definition for cursor border
        cursorborderradius: "5px", // border radius in pixel for cursor
        zindex: "auto" | <number>, // change z-index for scrollbar div
        scrollspeed: 60, // scrolling speed
        mousescrollstep: 40, // scrolling speed with mouse wheel (pixel)
        touchbehavior: false, // enable cursor-drag scrolling like touch devices in desktop computer
        hwacceleration: true, // use hardware accelerated scroll when supported
        boxzoom: false, // enable zoom for box content
        dblclickzoom: true, // (only when boxzoom=true) zoom activated when double click on box
        gesturezoom: true, // (only when boxzoom=true and with touch devices) zoom activated when pinch out/in on box
        grabcursorenabled: true // (only when touchbehavior=true) display "grab" icon
        autohidemode: true, // how hide the scrollbar works, possible values: 
          true | // hide when no scrolling
          "cursor" | // only cursor hidden
          false | // do not hide,
          "leave" | // hide only if pointer leaves content
          "hidden" | // hide always
          "scroll", // show only on scroll          
        background: "", // change css for rail background
        iframeautoresize: true, // autoresize iframe on load event
        cursorminheight: 32, // set the minimum cursor height (pixel)
        preservenativescrolling: true, // you can scroll native scrollable areas with mouse, bubbling mouse wheel event
        railoffset: false, // you can add offset top/left for rail position
        bouncescroll: false, // (only hw accell) enable scroll bouncing at the end of content as mobile-like 
        spacebarenabled: true, // enable page down scrolling when space bar has pressed
        railpadding: { top: 0, right: 0, left: 0, bottom: 0 }, // set padding for rail bar
        disableoutline: true, // for chrome browser, disable outline (orange highlight) when selecting a div with nicescroll
        horizrailenabled: true, // nicescroll can manage horizontal scroll
        railalign: right, // alignment of vertical rail
        railvalign: bottom, // alignment of horizontal rail
        enabletranslate3d: true, // nicescroll can use css translate to scroll content
        enablemousewheel: true, // nicescroll can manage mouse wheel events
        enablekeyboard: true, // nicescroll can manage keyboard events
        smoothscroll: true, // scroll with ease movement
        sensitiverail: true, // click on rail make a scroll
        enablemouselockapi: true, // can use mouse caption lock API (same issue on object dragging)
        cursorfixedheight: false, // set fixed height for cursor in pixel
        hidecursordelay: 400, // set the delay in microseconds to fading out scrollbars
        directionlockdeadzone: 6, // dead zone in pixels for direction lock activation
        nativeparentscrolling: true, // detect bottom of content and let parent to scroll, as native scroll does
        enablescrollonselection: true, // enable auto-scrolling of content when selection text
        cursordragspeed: 0.3, // speed of selection when dragged with cursor
        rtlmode: "auto", // horizontal div scrolling starts at left side
        cursordragontouch: false, // drag cursor in touch / touchbehavior mode also
        oneaxismousemode: "auto", // it permits horizontal scrolling with mousewheel on horizontal only content, if false (vertical-only) mousewheel don't scroll horizontally, if value is auto detects two-axis mouse
        scriptpath: "" // define custom path for boxmode icons ("" => same script path)
        preventmultitouchscrolling: true // prevent scrolling on multitouch events
    }




----------

## Contributing

Open an issue first to discuss potential changes/additions. If you have questions with the guide, feel free to leave them as issues in the repository. If you find a typo, create a pull request. The idea is to keep the content up to date and use github’s native feature to help tell the story with issues and PR’s, which are all searchable via google. Why? Because odds are if you have a question, someone else does too! You can learn more here at about how to contribute.

*By contributing to this repository you are agreeing to make your content available subject to the license of this repository.*

### Process
    1. Discuss the changes in a GitHub issue.
    2. Open a Pull Request, reference the issue, and explain the change and why it adds value.
    3. The Pull Request will be evaluated and either merged or declined.

## License

 Use this guide. Attributions are appreciated._

### Copyright

Copyright (c) 2014-2015 [Tushar Borole](http://www.tusharborole.com)

### (The MIT License)
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
