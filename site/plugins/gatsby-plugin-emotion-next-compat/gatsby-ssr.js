// @flow
import * as React from 'react'
import { renderToString } from 'react-dom/server'
import { renderStylesToString } from 'emotion-server'
import * as emotion from 'emotion'
import createCompatCache from '@emotion/compat-cache'
import { Provider } from '@emotion/core'

export const replaceRenderer = ({
  replaceBodyHTMLString,
  bodyComponent
}: *) => {
  let cache = createCompatCache(emotion)
  return replaceBodyHTMLString(
    renderStylesToString(
      renderToString(<Provider value={cache}>{bodyComponent}</Provider>)
    )
  )
}
