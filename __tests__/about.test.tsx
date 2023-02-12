import { render } from '@testing-library/react'
import About from  '@/pages/about'

describe('Home', () => {
    it('render Home correctly', () => {
       const { container } = render(<About />)
       expect(container).toMatchSnapshot()
    })
})