import { Component } from 'react'

import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        const {onAdd} = this.props;
        e.preventDefault();
        onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form d-flex" onSubmit={this.onSubmit}>
                    <input type="text"
                        name="name"
                        id=""
                        value={name}
                        className="form-control new-post-label" placeholder="Введите имя"
                        onChange={this.onValueChange} />
                    <input type="number"
                        name="salary"
                        id=""
                        value={salary}
                        className="form-control new-post-label" placeholder="З/П в $"
                        onChange={this.onValueChange} />
                    <button type="submit"
                            className="btn btn-outline-light">Добавить
                            </button>
                </form>
            </div>
        )
    }

}

export default EmployeesAddForm;