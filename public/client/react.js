/**
 * React v0.13.3
 */
(function (f) {
  if (typeof exports === "object" && typeof module !== "undefined") {
    module.exports = f()
  }
  else if (typeof define === "function" && define.amd) {
    define([], f)
  }
  else {
    var g;
    if (typeof window !== "undefined") {
      g = window
    }
    else if (typeof global !== "undefined") {
      g = global
    }
    else if (typeof self !== "undefined") {
      g = self
    }
    else {
      g = this
    }
    g.React = f()
  }
})(function () {
  var define, module, exports;
  return (function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;
          if (!u && a)return a(o, !0);
          if (i)return i(o, !0);
          var f = new Error("Cannot find module '" + o + "'");
          throw f.code = "MODULE_NOT_FOUND", f
        }
        var l = n[o] = {exports: {}};
        t[o][0].call(l.exports, function (e) {
          var n = t[o][1][e];
          return s(n ? n : e)
        }, l, l.exports, e, t, n, r)
      }
      return n[o].exports
    }

    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++)s(r[o]);
    return s
  })({
    1: [function (_dereq_, module, exports) {
      /**
       * Copyright 2013-2015, Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * LICENSE file in the root directory of this source tree. An additional grant
       * of patent rights can be found in the PATENTS file in the same directory.
       *
       * @providesModule React
       */

      /* globals __REACT_DEVTOOLS_GLOBAL_HOOK__*/

      'use strict';

      var EventPluginUtils = _dereq_(19);
      var ReactChildren = _dereq_(32);
      var ReactComponent = _dereq_(34);
      var ReactClass = _dereq_(33);
      var ReactContext = _dereq_(38);
      var ReactCurrentOwner = _dereq_(39);
      var ReactElement = _dereq_(57);
      var ReactElementValidator = _dereq_(58);
      var ReactDOM = _dereq_(40);
      var ReactDOMTextComponent = _dereq_(51);
      var ReactDefaultInjection = _dereq_(54);
      var ReactInstanceHandles = _dereq_(66);
      var ReactMount = _dereq_(70);
      var ReactPerf = _dereq_(75);
      var ReactPropTypes = _dereq_(78);
      var ReactReconciler = _dereq_(81);
      var ReactServerRendering = _dereq_(84);

      var assign = _dereq_(27);
      var findDOMNode = _dereq_(117);
      var onlyChild = _dereq_(144);

      ReactDefaultInjection.inject();

      var createElement = ReactElement.createElement;
      var createFactory = ReactElement.createFactory;
      var cloneElement = ReactElement.cloneElement;

      if ("production" !== "development") {
        createElement = ReactElementValidator.createElement;
        createFactory = ReactElementValidator.createFactory;
        cloneElement = ReactElementValidator.cloneElement;
      }

      var render = ReactPerf.measure('React', 'render', ReactMount.render);

      var React = {
        Children: {
          map: ReactChildren.map,
          forEach: ReactChildren.forEach,
          count: ReactChildren.count,
          only: onlyChild
        },
        Component: ReactComponent,
        DOM: ReactDOM,
        PropTypes: ReactPropTypes,
        initializeTouchEvents: function (shouldUseTouch) {
          EventPluginUtils.useTouchEvents = shouldUseTouch;
        },
        createClass: ReactClass.createClass,
        createElement: createElement,
        cloneElement: cloneElement,
        createFactory: createFactory,
        createMixin: function (mixin) {
          // Currently a noop. Will be used to validate and trace mixins.
          return mixin;
        },
        constructAndRenderComponent: ReactMount.constructAndRenderComponent,
        constructAndRenderComponentByID: ReactMount.constructAndRenderComponentByID,
        findDOMNode: findDOMNode,
        render: render,
        renderToString: ReactServerRendering.renderToString,
        renderToStaticMarkup: ReactServerRendering.renderToStaticMarkup,
        unmountComponentAtNode: ReactMount.unmountComponentAtNode,
        isValidElement: ReactElement.isValidElement,
        withContext: ReactContext.withContext,

        // Hook for JSX spread, don't use this for anything else.
        __spread: assign
      };

// Inject the runtime into a devtools global hook regardless of browser.
// Allows for debugging when the hook is injected on the page.
      if (
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject === 'function') {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
          CurrentOwner: ReactCurrentOwner,
          InstanceHandles: ReactInstanceHandles,
          Mount: ReactMount,
          Reconciler: ReactReconciler,
          TextComponent: ReactDOMTextComponent
        });
      }

      if ("production" !== "development") {
        var ExecutionEnvironment = _dereq_(21);
        if (ExecutionEnvironment.canUseDOM && window.top === window.self) {

          // If we're in Chrome, look for the devtools marker and provide a download
          // link if not installed.
          if (navigator.userAgent.indexOf('Chrome') > -1) {
            if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
              console.debug(
                'Download the React DevTools for a better development experience: ' +
                'https://fb.me/react-devtools'
              );
            }
          }

          var expectedFeatures = [
            // shims
            Array.isArray,
            Array.prototype.every,
            Array.prototype.forEach,
            Array.prototype.indexOf,
            Array.prototype.map,
            Date.now,
            Function.prototype.bind,
            Object.keys,
            String.prototype.split,
            String.prototype.trim,

            // shams
            Object.create,
            Object.freeze
          ];

          for (var i = 0; i < expectedFeatures.length; i++) {
            if (!expectedFeatures[i]) {
              console.error(
                'One or more ES5 shim/shams expected by React are not available: ' +
                'https://fb.me/react-warning-polyfills'
              );
              break;
            }
          }
        }
      }

      React.version = '0.13.3';

      module.exports = React;

    }, {
      "117": 117,
      "144": 144,
      "19": 19,
      "21": 21,
      "27": 27,
      "32": 32,
      "33": 33,
      "34": 34,
      "38": 38,
      "39": 39,
      "40": 40,
      "51": 51,
      "54": 54,
      "57": 57,
      "58": 58,
      "66": 66,
      "70": 70,
      "75": 75,
      "78": 78,
      "81": 81,
      "84": 84
    }],
    2: [function (_dereq_, module, exports) {
      /**
       * Copyright 2013-2015, Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * LICENSE file in the root directory of this source tree. An additional grant
       * of patent rights can be found in the PATENTS file in the same directory.
       *
       * @providesModule AutoFocusMixin
       * @typechecks static-only
       */

      'use strict';

      var focusNode = _dereq_(119);

      var AutoFocusMixin = {
        componentDidMount: function () {
          if (this.props.autoFocus) {
            focusNode(this.getDOMNode());
          }
        }
      };

      module.exports = AutoFocusMixin;

    }, {"119": 119}],
    3: [function (_dereq_, module, exports) {
      /**
       * Copyright 2013-2015 Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * LICENSE file in the root directory of this source tree. An additional grant
       * of patent rights can be found in the PATENTS file in the same directory.
       *
       * @providesModule BeforeInputEventPlugin
       * @typechecks static-only
       */

      'use strict';

      var EventConstants = _dereq_(15);
      var EventPropagators = _dereq_(20);
      var ExecutionEnvironment = _dereq_(21);
      var FallbackCompositionState = _dereq_(22);
      var SyntheticCompositionEvent = _dereq_(93);
      var SyntheticInputEvent = _dereq_(97);

      var keyOf = _dereq_(141);

      var END_KEYCODES = [9, 13, 27, 32]; // Tab, Return, Esc, Space
      var START_KEYCODE = 229;

      var canUseCompositionEvent = (
        ExecutionEnvironment.canUseDOM &&
        'CompositionEvent' in window
      );

      var documentMode = null;
      if (ExecutionEnvironment.canUseDOM && 'documentMode' in document) {
        documentMode = document.documentMode;
      }

// Webkit offers a very useful `textInput` event that can be used to
// directly represent `beforeInput`. The IE `textinput` event is not as
// useful, so we don't use it.
      var canUseTextInputEvent = (
        ExecutionEnvironment.canUseDOM &&
        'TextEvent' in window && !documentMode && !isPresto()
      );

// In IE9+, we have access to composition events, but the data supplied
// by the native compositionend event may be incorrect. Japanese ideographic
// spaces, for instance (\u3000) are not recorded correctly.
      var useFallbackCompositionData = (
        ExecutionEnvironment.canUseDOM &&
        (
          (!canUseCompositionEvent || documentMode && documentMode > 8 && documentMode <= 11)
        )
      );

      /**
       * Opera <= 12 includes TextEvent in window, but does not fire
       * text input events. Rely on keypress instead.
       */
      function isPresto() {
        var opera = window.opera;
        return (
          typeof opera === 'object' &&
          typeof opera.version === 'function' &&
          parseInt(opera.version(), 10) <= 12
        );
      }

      var SPACEBAR_CODE = 32;
      var SPACEBAR_CHAR = String.fromCharCode(SPACEBAR_CODE);

      var topLevelTypes = EventConstants.topLevelTypes;

// Events and their corresponding property names.
      var eventTypes = {
        beforeInput: {
          phasedRegistrationNames: {
            bubbled: keyOf({onBeforeInput: null}),
            captured: keyOf({onBeforeInputCapture: null})
          },
          dependencies: [
            topLevelTypes.topCompositionEnd,
            topLevelTypes.topKeyPress,
            topLevelTypes.topTextInput,
            topLevelTypes.topPaste
          ]
        },
        compositionEnd: {
          phasedRegistrationNames: {
            bubbled: keyOf({onCompositionEnd: null}),
            captured: keyOf({onCompositionEndCapture: null})
          },
          dependencies: [
            topLevelTypes.topBlur,
            topLevelTypes.topCompositionEnd,
            topLevelTypes.topKeyDown,
            topLevelTypes.topKeyPress,
            topLevelTypes.topKeyUp,
            topLevelTypes.topMouseDown
          ]
        },
        compositionStart: {
          phasedRegistrationNames: {
            bubbled: keyOf({onCompositionStart: null}),
            captured: keyOf({onCompositionStartCapture: null})
          },
          dependencies: [
            topLevelTypes.topBlur,
            topLevelTypes.topCompositionStart,
            topLevelTypes.topKeyDown,
            topLevelTypes.topKeyPress,
            topLevelTypes.topKeyUp,
            topLevelTypes.topMouseDown
          ]
        },
        compositionUpdate: {
          phasedRegistrationNames: {
            bubbled: keyOf({onCompositionUpdate: null}),
            captured: keyOf({onCompositionUpdateCapture: null})
          },
          dependencies: [
            topLevelTypes.topBlur,
            topLevelTypes.topCompositionUpdate,
            topLevelTypes.topKeyDown,
            topLevelTypes.topKeyPress,
            topLevelTypes.topKeyUp,
            topLevelTypes.topMouseDown
          ]
        }
      };

// Track whether we've ever handled a keypress on the space key.
      var hasSpaceKeypress = false;

      /**
       * Return whether a native keypress event is assumed to be a command.
       * This is required because Firefox fires `keypress` events for key commands
       * (cut, copy, select-all, etc.) even though no character is inserted.
       */
      function isKeypressCommand(nativeEvent) {
        return (
          (nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) &&
            // ctrlKey && altKey is equivalent to AltGr, and is not a command.
          !(nativeEvent.ctrlKey && nativeEvent.altKey)
        );
      }


      /**
       * Translate native top level events into event types.
       *
       * @param {string} topLevelType
       * @return {object}
       */
      function getCompositionEventType(topLevelType) {
        switch (topLevelType) {
          case topLevelTypes.topCompositionStart:
            return eventTypes.compositionStart;
          case topLevelTypes.topCompositionEnd:
            return eventTypes.compositionEnd;
          case topLevelTypes.topCompositionUpdate:
            return eventTypes.compositionUpdate;
        }
      }

      /**
       * Does our fallback best-guess model think this event signifies that
       * composition has begun?
       *
       * @param {string} topLevelType
       * @param {object} nativeEvent
       * @return {boolean}
       */
      function isFallbackCompositionStart(topLevelType, nativeEvent) {
        return (
          topLevelType === topLevelTypes.topKeyDown &&
          nativeEvent.keyCode === START_KEYCODE
        );
      }

      /**
       * Does our fallback mode think that this event is the end of composition?
       *
       * @param {string} topLevelType
       * @param {object} nativeEvent
       * @return {boolean}
       */
      function isFallbackCompositionEnd(topLevelType, nativeEvent) {
        switch (topLevelType) {
          case topLevelTypes.topKeyUp:
            // Command keys insert or clear IME input.
            return (END_KEYCODES.indexOf(nativeEvent.keyCode) !== -1);
          case topLevelTypes.topKeyDown:
            // Expect IME keyCode on each keydown. If we get any other
            // code we must have exited earlier.
            return (nativeEvent.keyCode !== START_KEYCODE);
          case topLevelTypes.topKeyPress:
          case topLevelTypes.topMouseDown:
          case topLevelTypes.topBlur:
            // Events are not possible without cancelling IME.
            return true;
          default:
            return false;
        }
      }

      /**
       * Google Input Tools provides composition data via a CustomEvent,
       * with the `data` property populated in the `detail` object. If this
       * is available on the event object, use it. If not, this is a plain
       * composition event and we have nothing special to extract.
       *
       * @param {object} nativeEvent
       * @return {?string}
       */
      function getDataFromCustomEvent(nativeEvent) {
        var detail = nativeEvent.detail;
        if (typeof detail === 'object' && 'data' in detail) {
          return detail.data;
        }
        return null;
      }

// Track the current IME composition fallback object, if any.
      var currentComposition = null;

      /**
       * @param {string} topLevelType Record from `EventConstants`.
       * @param {DOMEventTarget} topLevelTarget The listening component root node.
       * @param {string} topLevelTargetID ID of `topLevelTarget`.
       * @param {object} nativeEvent Native browser event.
       * @return {?object} A SyntheticCompositionEvent.
       */
      function extractCompositionEvent(topLevelType,
                                       topLevelTarget,
                                       topLevelTargetID,
                                       nativeEvent) {
        var eventType;
        var fallbackData;

        if (canUseCompositionEvent) {
          eventType = getCompositionEventType(topLevelType);
        }
        else if (!currentComposition) {
          if (isFallbackCompositionStart(topLevelType, nativeEvent)) {
            eventType = eventTypes.compositionStart;
          }
        }
        else if (isFallbackCompositionEnd(topLevelType, nativeEvent)) {
          eventType = eventTypes.compositionEnd;
        }

        if (!eventType) {
          return null;
        }

        if (useFallbackCompositionData) {
          // The current composition is stored statically and must not be
          // overwritten while composition continues.
          if (!currentComposition && eventType === eventTypes.compositionStart) {
            currentComposition = FallbackCompositionState.getPooled(topLevelTarget);
          }
          else if (eventType === eventTypes.compositionEnd) {
            if (currentComposition) {
              fallbackData = currentComposition.getData();
            }
          }
        }

        var event = SyntheticCompositionEvent.getPooled(
          eventType,
          topLevelTargetID,
          nativeEvent
        );

        if (fallbackData) {
          // Inject data generated from fallback path into the synthetic event.
          // This matches the property of native CompositionEventInterface.
          event.data = fallbackData;
        }
        else {
          var customData = getDataFromCustomEvent(nativeEvent);
          if (customData !== null) {
            event.data = customData;
          }
        }

        EventPropagators.accumulateTwoPhaseDispatches(event);
        return event;
      }

      /**
       * @param {string} topLevelType Record from `EventConstants`.
       * @param {object} nativeEvent Native browser event.
       * @return {?string} The string corresponding to this `beforeInput` event.
       */
      function getNativeBeforeInputChars(topLevelType, nativeEvent) {
        switch (topLevelType) {
          case topLevelTypes.topCompositionEnd:
            return getDataFromCustomEvent(nativeEvent);
          case topLevelTypes.topKeyPress:
            /**
             * If native `textInput` events are available, our goal is to make
             * use of them. However, there is a special case: the spacebar key.
             * In Webkit, preventing default on a spacebar `textInput` event
             * cancels character insertion, but it *also* causes the browser
             * to fall back to its default spacebar behavior of scrolling the
             * page.
             *
             * Tracking at:
             * https://code.google.com/p/chromium/issues/detail?id=355103
             *
             * To avoid this issue, use the keypress event as if no `textInput`
             * event is available.
             */
            var which = nativeEvent.which;
            if (which !== SPACEBAR_CODE) {
              return null;
            }

            hasSpaceKeypress = true;
            return SPACEBAR_CHAR;

          case topLevelTypes.topTextInput:
            // Record the characters to be added to the DOM.
            var chars = nativeEvent.data;

            // If it's a spacebar character, assume that we have already handled
            // it at the keypress level and bail immediately. Android Chrome
            // doesn't give us keycodes, so we need to blacklist it.
            if (chars === SPACEBAR_CHAR && hasSpaceKeypress) {
              return null;
            }

            return chars;

          default:
            // For other native event types, do nothing.
            return null;
        }
      }

      /**
       * For browsers that do not provide the `textInput` event, extract the
       * appropriate string to use for SyntheticInputEvent.
       *
       * @param {string} topLevelType Record from `EventConstants`.
       * @param {object} nativeEvent Native browser event.
       * @return {?string} The fallback string for this `beforeInput` event.
       */
      function getFallbackBeforeInputChars(topLevelType, nativeEvent) {
        // If we are currently composing (IME) and using a fallback to do so,
        // try to extract the composed characters from the fallback object.
        if (currentComposition) {
          if (
            topLevelType === topLevelTypes.topCompositionEnd ||
            isFallbackCompositionEnd(topLevelType, nativeEvent)
          ) {
            var chars = currentComposition.getData();
            FallbackCompositionState.release(currentComposition);
            currentComposition = null;
            return chars;
          }
          return null;
        }

        switch (topLevelType) {
          case topLevelTypes.topPaste:
            // If a paste event occurs after a keypress, throw out the input
            // chars. Paste events should not lead to BeforeInput events.
            return null;
          case topLevelTypes.topKeyPress:
            /**
             * As of v27, Firefox may fire keypress events even when no character
             * will be inserted. A few possibilities:
             *
             * - `which` is `0`. Arrow keys, Esc key, etc.
             *
             * - `which` is the pressed key code, but no char is available.
             *   Ex: 'AltGr + d` in Polish. There is no modified character for
             *   this key combination and no character is inserted into the
             *   document, but FF fires the keypress for char code `100` anyway.
             *   No `input` event will occur.
             *
             * - `which` is the pressed key code, but a command combination is
             *   being used. Ex: `Cmd+C`. No character is inserted, and no
             *   `input` event will occur.
             */
            if (nativeEvent.which && !isKeypressCommand(nativeEvent)) {
              return String.fromCharCode(nativeEvent.which);
            }
            return null;
          case topLevelTypes.topCompositionEnd:
            return useFallbackCompositionData ? null : nativeEvent.data;
          default:
            return null;
        }
      }

      /**
       * Extract a SyntheticInputEvent for `beforeInput`, based on either native
       * `textInput` or fallback behavior.
       *
       * @param {string} topLevelType Record from `EventConstants`.
       * @param {DOMEventTarget} topLevelTarget The listening component root node.
       * @param {string} topLevelTargetID ID of `topLevelTarget`.
       * @param {object} nativeEvent Native browser event.
       * @return {?object} A SyntheticInputEvent.
       */
      function extractBeforeInputEvent(topLevelType,
                                       topLevelTarget,
                                       topLevelTargetID,
                                       nativeEvent) {
        var chars;

        if (canUseTextInputEvent) {
          chars = getNativeBeforeInputChars(topLevelType, nativeEvent);
        }
        else {
          chars = getFallbackBeforeInputChars(topLevelType, nativeEvent);
        }

        // If no characters are being inserted, no BeforeInput event should
        // be fired.
        if (!chars) {
          return null;
        }

        var event = SyntheticInputEvent.getPooled(
          eventTypes.beforeInput,
          topLevelTargetID,
          nativeEvent
        );

        event.data = chars;
        EventPropagators.accumulateTwoPhaseDispatches(event);
        return event;
      }

      /**
       * Create an `onBeforeInput` event to match
       * http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105/#events-inputevents.
       *
       * This event plugin is based on the native `textInput` event
       * available in Chrome, Safari, Opera, and IE. This event fires after
       * `onKeyPress` and `onCompositionEnd`, but before `onInput`.
       *
       * `beforeInput` is spec'd but not implemented in any browsers, and
       * the `input` event does not provide any useful information about what has
       * actually been added, contrary to the spec. Thus, `textInput` is the best
       * available event to identify the characters that have actually been inserted
       * into the target node.
       *
       * This plugin is also responsible for emitting `composition` events, thus
       * allowing us to share composition fallback code for both `beforeInput` and
       * `composition` event types.
       */
      var BeforeInputEventPlugin = {

        eventTypes: eventTypes,

        /**
         * @param {string} topLevelType Record from `EventConstants`.
         * @param {DOMEventTarget} topLevelTarget The listening component root node.
         * @param {string} topLevelTargetID ID of `topLevelTarget`.
         * @param {object} nativeEvent Native browser event.
         * @return {*} An accumulation of synthetic events.
         * @see {EventPluginHub.extractEvents}
         */
        extractEvents: function (topLevelType,
                                 topLevelTarget,
                                 topLevelTargetID,
                                 nativeEvent) {
          return [
            extractCompositionEvent(
              topLevelType,
              topLevelTarget,
              topLevelTargetID,
              nativeEvent
            ),
            extractBeforeInputEvent(
              topLevelType,
              topLevelTarget,
              topLevelTargetID,
              nativeEvent
            )
          ];
        }
      };

      module.exports = BeforeInputEventPlugin;

    }, {"141": 141, "15": 15, "20": 20, "21": 21, "22": 22, "93": 93, "97": 97}],
    4: [function (_dereq_, module, exports) {
      /**
       * Copyright 2013-2015, Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * LICENSE file in the root directory of this source tree. An additional grant
       * of patent rights can be found in the PATENTS file in the same directory.
       *
       * @providesModule CSSProperty
       */

      'use strict';

      /**
       * CSS properties which accept numbers but are not in units of "px".
       */
      var isUnitlessNumber = {
        boxFlex: true,
        boxFlexGroup: true,
        columnCount: true,
        flex: true,
        flexGrow: true,
        flexPositive: true,
        flexShrink: true,
        flexNegative: true,
        fontWeight: true,
        lineClamp: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        widows: true,
        zIndex: true,
        zoom: true,

        // SVG-related properties
        fillOpacity: true,
        strokeDashoffset: true,
        strokeOpacity: true,
        strokeWidth: true
      };

      /**
       * @param {string} prefix vendor-specific prefix, eg: Webkit
       * @param {string} key style name, eg: transitionDuration
       * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
       * WebkitTransitionDuration
       */
      function prefixKey(prefix, key) {
        return prefix + key.charAt(0).toUpperCase() + key.substring(1);
      }

      /**
       * Support style names that may come passed in prefixed by adding permutations
       * of vendor prefixes.
       */
      var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
      Object.keys(isUnitlessNumber).forEach(function (prop) {
        prefixes.forEach(function (prefix) {
          isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
        });
      });

      /**
       * Most style properties can be unset by doing .style[prop] = '' but IE8
       * doesn't like doing that with shorthand properties so for the properties that
       * IE8 breaks on, which are listed here, we instead unset each of the
       * individual properties. See http://bugs.jquery.com/ticket/12385.
       * The 4-value 'clock' properties like margin, padding, border-width seem to
       * behave without any problems. Curiously, list-style works too without any
       * special prodding.
       */
      var shorthandPropertyExpansions = {
        background: {
          backgroundImage: true,
          backgroundPosition: true,
          backgroundRepeat: true,
          backgroundColor: true
        },
        border: {
          borderWidth: true,
          borderStyle: true,
          borderColor: true
        },
        borderBottom: {
          borderBottomWidth: true,
          borderBottomStyle: true,
          borderBottomColor: true
        },
        borderLeft: {
          borderLeftWidth: true,
          borderLeftStyle: true,
          borderLeftColor: true
        },
        borderRight: {
          borderRightWidth: true,
          borderRightStyle: true,
          borderRightColor: true
        },
        borderTop: {
          borderTopWidth: true,
          borderTopStyle: true,
          borderTopColor: true
        },
        font: {
          fontStyle: true,
          fontVariant: true,
          fontWeight: true,
          fontSize: true,
          lineHeight: true,
          fontFamily: true
        }
      };

      var CSSProperty = {
        isUnitlessNumber: isUnitlessNumber,
        shorthandPropertyExpansions: shorthandPropertyExpansions
      };

      module.exports = CSSProperty;

    }, {}],
    5: [function (_dereq_, module, exports) {
      /**
       * Copyright 2013-2015, Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * LICENSE file in the root directory of this source tree. An additional grant
       * of patent rights can be found in the PATENTS file in the same directory.
       *
       * @providesModule CSSPropertyOperations
       * @typechecks static-only
       */

      'use strict';

      var CSSProperty = _dereq_(4);
      var ExecutionEnvironment = _dereq_(21);

      var camelizeStyleName = _dereq_(108);
      var dangerousStyleValue = _dereq_(113);
      var hyphenateStyleName = _dereq_(133);
      var memoizeStringOnly = _dereq_(143);
      var warning = _dereq_(154);

      var processStyleName = memoizeStringOnly(function (styleName) {
        return hyphenateStyleName(styleName);
      });

      var styleFloatAccessor = 'cssFloat';
      if (ExecutionEnvironment.canUseDOM) {
        // IE8 only supports accessing cssFloat (standard) as styleFloat
        if (document.documentElement.style.cssFloat === undefined) {
          styleFloatAccessor = 'styleFloat';
        }
      }

      if ("production" !== "development") {
        // 'msTransform' is correct, but the other prefixes should be capitalized
        var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;

        // style values shouldn't contain a semicolon
        var badStyleValueWithSemicolonPattern = /;\s*$/;

        var warnedStyleNames = {};
        var warnedStyleValues = {};

        var warnHyphenatedStyleName = function (name) {
          if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
            return;
          }

          warnedStyleNames[name] = true;
          ("production" !== "development" ? warning(
            false,
            'Unsupported style property %s. Did you mean %s?',
            name,
            camelizeStyleName(name)
          ) : null);
        };

        var warnBadVendoredStyleName = function (name) {
          if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
            return;
          }

          warnedStyleNames[name] = true;
          ("production" !== "development" ? warning(
            false,
            'Unsupported vendor-prefixed style property %s. Did you mean %s?',
            name,
            name.charAt(0).toUpperCase() + name.slice(1)
          ) : null);
        };

        var warnStyleValueWithSemicolon = function (name, value) {
          if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
            return;
          }

          warnedStyleValues[value] = true;
          ("production" !== "development" ? warning(
            false,
            'Style property values shouldn\'t contain a semicolon. ' +
            'Try "%s: %s" instead.',
            name,
            value.replace(badStyleValueWithSemicolonPattern, '')
          ) : null);
        };

        /**
         * @param {string} name
         * @param {*} value
         */
        var warnValidStyle = function (name, value) {
          if (name.indexOf('-') > -1) {
            warnHyphenatedStyleName(name);
          }
          else if (badVendoredStyleNamePattern.test(name)) {
            warnBadVendoredStyleName(name);
          }
          else if (badStyleValueWithSemicolonPattern.test(value)) {
            warnStyleValueWithSemicolon(name, value);
          }
        };
      }

      /**
       * Operations for dealing with CSS properties.
       */
      var CSSPropertyOperations = {

        /**
         * Serializes a mapping of style properties for use as inline styles:
         *
         *   > createMarkupForStyles({width: '200px', height: 0})
         *   "width:200px;height:0;"
         *
         * Undefined values are ignored so that declarative programming is easier.
         * The result should be HTML-escaped before insertion into the DOM.
         *
         * @param {object} styles
         * @return {?string}
         */
        createMarkupForStyles: function (styles) {
          var serialized = '';
          for (var styleName in styles) {
            if (!styles.hasOwnProperty(styleName)) {
              continue;
            }
            var styleValue = styles[styleName];
            if ("production" !== "development") {
              warnValidStyle(styleName, styleValue);
            }
            if (styleValue != null) {
              serialized += processStyleName(styleName) + ':';
              serialized += dangerousStyleValue(styleName, styleValue) + ';';
            }
          }
          return serialized || null;
        },

        /**
         * Sets the value for multiple styles on a node.  If a value is specified as
         * '' (empty string), the corresponding style property will be unset.
         *
         * @param {DOMElement} node
         * @param {object} styles
         */
        setValueForStyles: function (node, styles) {
          var style = node.style;
          for (var styleName in styles) {
            if (!styles.hasOwnProperty(styleName)) {
              continue;
            }
            if ("production" !== "development") {
              warnValidStyle(styleName, styles[styleName]);
            }
            var styleValue = dangerousStyleValue(styleName, styles[styleName]);
            if (styleName === 'float') {
              styleName = styleFloatAccessor;
            }
            if (styleValue) {
              style[styleName] = styleValue;
            }
            else {
              var expansion = CSSProperty.shorthandPropertyExpansions[styleName];
              if (expansion) {
                // Shorthand property that IE8 won't like unsetting, so unset each
                // component to placate it
                for (var individualStyleName in expansion) {
                  style[individualStyleName] = '';
                }
              }
              else {
                style[styleName] = '';
              }
            }
          }
        }

      };

      module.exports = CSSPropertyOperations;

    }, {"108": 108, "113": 113, "133": 133, "143": 143, "154": 154, "21": 21, "4": 4}]
  }, {}, [1])(1)
});