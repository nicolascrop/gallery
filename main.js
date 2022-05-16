import './style.css'

function action() {
    console.log('in action')
}

document.querySelector('#app').innerHTML = `
  <h1>Hello!</h1>
  <Button id="action">Action</Button>
`

document.getElementById('action').addEventListener('click', action)


