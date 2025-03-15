import { expect, assert, it, toStrictEqual } from 'vitest'

class Planet {
  private static planet: Planet;

  private constructor (readonly name: string) {}

  static get earth(): Planet
  {
    if (!this.planet) {
      this.planet = new Planet('earth')
    }

    return this.planet;
  }
}

it('I can create the earth planet', () => {
  const earth = Planet.earth
  assert(earth, Planet);
})

it('I cannot create a second earth planet', () => {
  const earth = Planet.earth;
  const another = Planet.earth;

  expect(earth).toStrictEqual(another);
})