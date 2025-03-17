import { expect, it } from 'vitest'
import takeALookAtMonaLisa from "./use-case/takeALookAtMonaLisa";
import MonaLisaPainting from "./MonaLisaPainting";


it('I can take a look at Mona Lisa', () => {
  const monaLisa = takeALookAtMonaLisa();
  expect(monaLisa).toBeInstanceOf(MonaLisaPainting)
})

it('The second look at Mona Lisa show me the same Mona Lisa', () => {
  const firstLookAtMonaLisa = takeALookAtMonaLisa();
  const secondLookAtMonaLisa = takeALookAtMonaLisa();

  expect(firstLookAtMonaLisa === secondLookAtMonaLisa).toBeTruthy()
})

