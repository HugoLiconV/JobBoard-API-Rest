import { Company } from '.'
import { User } from '../user'

let user, company

beforeEach(async () => {
  user = await User.create({ email: 'a@a.com', password: '123456' })
  company = await Company.create({ user, rfc: 'test', razon: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = company.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(company.id)
    expect(typeof view.user).toBe('object')
    expect(view.user.id).toBe(user.id)
    expect(view.rfc).toBe(company.rfc)
    expect(view.razon).toBe(company.razon)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = company.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(company.id)
    expect(typeof view.user).toBe('object')
    expect(view.user.id).toBe(user.id)
    expect(view.rfc).toBe(company.rfc)
    expect(view.razon).toBe(company.razon)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
