/* global global, jest */
import { TextEncoder, TextDecoder } from 'util'

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([])
  })
)