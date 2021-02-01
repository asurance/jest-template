import { Add } from '..'

describe('Add', function () {

    it('没有参数', function () {
        expect(Add()).toBe(0)
    })

    it('一个参数', function () {
        expect(Add(10)).toBe(10)
    })

    it('两个参数', function () {
        expect(Add(10, 20)).toBe(30)
    })

    it('超过两个参数', function () {
        expect(Add(1, 2, 3, 4, 5)).toBe(15)
    })
})