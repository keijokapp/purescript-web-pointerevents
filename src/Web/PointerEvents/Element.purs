module Web.PointerEvents.Element where

import Prelude (Unit)
import Effect (Effect)
import Web.DOM.Element (Element)

foreign import setPointerCapture :: Element -> Int -> Effect Unit
foreign import releasePointerCapture :: Element -> Int -> Effect Unit
foreign import hasPointerCapture :: Element -> Int -> Effect Boolean
