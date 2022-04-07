import {
  GetDepartmentProducts,
  GetDepartments
} from '../../services/DepartmentService'
import { GET_DEPARTMENTS, GET_DEPARTMENT_PRODUCTS } from '../types'

export const LoadDepartments = () => {
  return async (dispatch) => {
    try {
      const departments = await GetDepartments()
      dispatch({
        type: GET_DEPARTMENTS,
        payload: departments
      })
      console.log(departments, 'departments')
    } catch (error) {
      throw error
    }
  }
}


