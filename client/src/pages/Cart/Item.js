import React, { Component } from 'react'

const styles = {
    container: {
        width: '750px',
        height: '150px',
        backgroundColor: '#f06292',
        margin: '1em',
        color: 'white',
        padding: '1em',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    image: {
        height: '100px',
        width: '100px',
        backgroundColor: 'white'
    }
}

class Item extends Component {
    
    render() {
        console.log(styles.container);
        return (
            <div style={styles.container}>
                <div style={styles.image}>
                    <img src="http://www.fillmurray.com/g/100/100" alt="placeholder" />
                </div>
                <div>
                    Product Information
                </div>
                <div>
                    Update Quantity<br/>
                    Remove
                </div>
            </div>
       )
    }
}

export default Item