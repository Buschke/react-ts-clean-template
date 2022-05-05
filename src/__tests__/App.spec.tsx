import { assert, expect, test } from 'vitest'
import { describe, it } from 'vitest'
import App from '../App'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

describe('App', () => {
  it('Title is "App"', async () => {
    render(<App title='Sven' />)
    const button =  screen.getByTestId('button')
    expect(button.textContent).toBe('Test')
    userEvent.click(button)
    await waitFor(() => expect(button.textContent).toBe('Tested'))
  })
})

// Edit an assertion and save to see HMR in action

test('Math.sqrt()', () => {
  expect(Math.sqrt(4)).toBe(2)
  expect(Math.sqrt(144)).toBe(12)
  expect(Math.sqrt(2)).toBe(Math.SQRT2)
})

test('JSON', () => {
  const input = {
    foo: 'hello',
    bar: 'world',
  }

  const output = JSON.stringify(input)

  expect(output).eq('{"foo":"hello","bar":"world"}')
  assert.deepEqual(JSON.parse(output), input, 'matches original')
})

describe('Simple App test', () => {
  it('Run: is 3 3', () => {
    expect(3).toBe(3)
  })
})