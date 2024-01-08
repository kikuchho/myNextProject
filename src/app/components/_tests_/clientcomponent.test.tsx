import { render, screen } from '@testing-library/react'
import ClientComponent from '../clientcomponent'
import { Suspense } from 'react'
import '@testing-library/jest-dom'


const mockedUseRouter = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => mockedUseRouter(),
  usePathname: jest.fn().mockReturnValue("/"),
  useSearchParams: jest.fn().mockReturnValue(" ")
}));






it('test 2 ', async () => {
  mockedUseRouter.mockReturnValue({ query: {}})
  render(
    <ClientComponent/>
  )
  const text = await screen.getByText("crooberid search")
  expect( text ).toBeInTheDocument()
  
})
