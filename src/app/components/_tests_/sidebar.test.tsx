
/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import Sidebar from "../SideBar";
import { Suspense } from 'react'
import '@testing-library/jest-dom'

it('TEST1 : should have text: crooberid search', async () => {
  render(
  <Sidebar/>
  )       //ARRANGE
  const text = await screen.getByText("crooberid search")   // ACT
  expect( text ).toBeInTheDocument()  //assert
  

  
})
it('s', async () => {
  render(
  <Sidebar/>
  )       //ARRANGE
  const text = await screen.getByText('on-sale car sub menu : t')   // ACT, 
  expect( text ).toBeVisible()  //assert (use tobevisible if you are using dropdownmenu or "hidden ")
  

  
})

/*
import Page from './page'

test('User page', async () => {
  render(
    <Suspense>
      <Page />
    </Suspense>
  )
  const heading = await screen.findByRole('heading')
  expect(heading).toHaveTextContent('Hello Gio')
})
*/