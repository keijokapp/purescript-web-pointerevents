module Web.PointerEvents.Navigator where

import Effect (Effect)
import Web.HTML.Navigator (Navigator)

foreign import maxTouchPoints :: Navigator -> Effect Int
