
Why would you want to give fragment a key?
This allows fragments to be used as items from an array

1. When we run react application, components code get **translated into elements** and ComponentDidMount and **apply onto the dom.**
2. React splits this work(initial render) into two phases: render and commit phase.
- First phases is render(supply) phase: in this phase, react will start from root of the component tree, downwards to leaf component. While transversing, for each of the component, react invokes createElement method. It converts component JSX into react element, **stores render output**. All react elements is then handed over to the commit phase.
- Second phases is commit(carry out) phase: react element is **applied to the DOM using react dom package**
3. React rerender
(a) During rerender phase, component can flagged itself for an update, calling useState function or useReducer dispatch function
(b) react will start at component tree root and transverse downwards to leaf component, finding all components that have been flagged as needing update.
(c) Then for each flagged component, react will invoke **createElement() method**, converts JSX into react elements aand stores that render output.
(d) Once all conversion is done for all **flagged components**, react will compare the new set of react elements with the one that was produced from last render.


HTML body event="EventHandler()"  <br/>
script EventHandler
