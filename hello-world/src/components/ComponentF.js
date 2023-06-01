import React from 'react'
import { ChannelContext, UserContext } from '../App'

function ComponentF() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                       return (
                            <ChannelContext.Consumer>
                                {
                                    channel => {
                                        return <div>User context value {user}, channel context value {channel}</div>
                                    }
                                }
                            </ChannelContext.Consumer>
                       ) 
                    }
                }
            </UserContext.Consumer>
            {/*
            <UserContext.Consumer>
                {
                    user => {
                        return <div>User context value {user}</div>
                    }
                }
            </UserContext.Consumer>
            */}
        </div>
    )
}

export default ComponentF

// Agora note a diferença com o ComponentE.js