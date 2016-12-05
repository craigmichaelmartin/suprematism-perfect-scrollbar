# Suprematism Perfect Scrollbar

An Angular 2 directive which wraps [perfect-scrollbar](https://github.com/noraesae/perfect-scrollbar)


#### Installation
```bash
npm i -S CINBCUniversal/suprematism-perfect-scrollbar
```
Until it is published to npm, point to github. A consequence of this is that
built files must be checked-in. When we publish to npm with `npm publish`,
there is a prehook to build the files and a posthook to delete them
(so only source files are saved in git). For now, after doing development,
we must manually run the publish prehook and save the files.


#### View
- [Hosted on Github Pages](https://cinbcuniversal.github.io/suprematism-perfect-scrollbar/)
- Run the example locally with `npm run example`


## Directives
- [`suprePerfectScrollbar`](#suprePerfectScrollbar)

#### <a id="suprePerfectScrollbar"></a> `suprePerfectScrollbar: undefined|ScrollbarConfigurationInterface`
- A directive specifying the element to be passed to perfect-scrollbars initialize.
- The directive may be passed [configuration options](https://github.com/noraesae/perfect-scrollbar#optional-parameters).

##### Events
- The directive dispatches [custom events](https://github.com/noraesae/perfect-scrollbar#events).


## Example
```html
<div class="container" [suprePerfectScrollbar]="{suppressScrollX: true}" (ps-scroll-y)="onYScroll($event)">
  <div class="content"></div>
</div>
```
