import React from 'react'


const styles = {
    wrapper: {
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 20,
    },
    button: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: '40px',
        height: '40px',
        borderRadius: '20px',
        background: 'white',
        opacity: 0.5,
    },
    pane: {
        position: 'relative',
        top: '40px',
    }
}


const Button = (props) => <div {...props} style={styles.button}/>


const Pane = ({children, opened}) => {
    return (
        <div style={{
            ...styles.pane,
            display: opened ? 'block' : 'none',
        }}>{children}</div>
    )
}


export default ({children}) => {
    const [opened, setOpened] = React.useState(true)

    return (
        <div style={styles.wrapper}>
            <Button onClick={() => setOpened(!opened)} />
            <Pane opened={opened}>
                {children}
            </Pane>
        </div>
    )
}
