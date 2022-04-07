import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoadDepartments } from '../store/actions/DepartmentActions'
import React, { useEffect } from 'react'

const mapStateToProps = ({ departmentState }) => {
  return { departmentState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDepartments: () => dispatch(LoadDepartments())
  }
}

const Products = (props) => {

  useEffect(() => {
    props.fetchDepartments()
  }, [])
  
  return (
    <div>
      {props.departmentState.departments.map((department) => (
        <ul key={department.id}>
          <Link to={`/departments/${department.id}`}>{department.name}</Link>
        </ul>
      ))}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)