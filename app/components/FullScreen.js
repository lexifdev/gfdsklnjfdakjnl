import React from 'react'


export default ({children}) => {
    return (
        <div style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'black',
            zIndex: 10,
        }}>{children}</div>
    )
}
