import { render } from '@testing-library/react'
import Home from '@/pages/index'

const allPostsData: {
    date: string
    title: string
    id: string
  }[] = [{
    date: '2023-02-02',
    title: 'title',
    id: '1111'
}]

describe('Home', () => {
    it('render Home correctly', () => {
    //    const { container } = render(<Home allPostsData={allPostsData} />)
    //    expect(container).toMatchSnapshot()
    })
})