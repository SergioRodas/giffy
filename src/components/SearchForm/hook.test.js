import { act, renderHook } from '@testing-library/react-hooks'

import useForm from './hook'

const setup = (params) => renderHook(() => useForm(params))

test('should change keyword', () => {
    const { result } = setup()

    act (() => {
        result.current.updateKeyword('batman')
    })

    expect(result.current.keyword).toBe('batman')
})

test('should use initial values', () => {
    const { result } = setup({
        initialKeyword: 'matrix'
    })

    act (() => {
        result.current.updateKeyword('matrix')
    })

    expect(result.current.keyword).toBe('matrix')
})

test('should update correctly times when used twice', () => {
    const { result } = setup({
        initialKeyword: 'matrix'
    })

    act (() => {
        result.current.updateKeyword('matrix')
        result.current.updateKeyword('batman')
    })

    expect(result.current.keyword).toBe('batman')
    expect(result.current.times).toBe(2)
})