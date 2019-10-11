import React from 'react'
// import Button from '../Button/Button'


// - provide a button that the person in charge can press every time there is a `strike`, `ball`, `foul` or `hit`.
// - there is **NO** need to specify the type of hit (single, double, etc).
// - changes recorded on this component should update the information shown by the `Display` component.
// - This is the component I will have my buttons mounted onto.

const Dashboard = ({scoreboard}) => {

    return (
        <div>
            <button 
                onClick={() => {
                    scoreboard('strike')}}>
                        Strike
            </button>
            
            <button 
                onClick={() => {
                    scoreboard('ball')}}>
                        Ball
            </button>

            <button 
                onClick={() => {
                    scoreboard('foul')}}>
                        Foul
            </button>
            <button 
                onClick={() => {
                    scoreboard('hit')}}>
                        Hit
            </button>
        </div>
    )
}

export default Dashboard