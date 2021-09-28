import React from 'react'

const click2CallPage = () => {
    return (
        <div>
            <div className="container">
                <form>
                    <fieldset>
                    <legend>Contact us</legend>
                    <ul>
                        <li>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="customername" name="user_name" />
                        </li>
                        <li>
                        <label htmlFor="phone">Phone:</label>
                        <input type="text" id="phonenumber" size={15} maxLength={30} name="user_phone" placeholder="+1xxxxxxxxxx" />
                        </li>
                        <li>
                        <label htmlFor="issue">Issue:</label>
                        <select id="issue">
                            <option value="Open Enrollment">Open Enrollment</option>
                            <option value="Billing">Billing</option>
                            <option value="Savings">savings</option>
                            <option value="Investments">Investments</option>
                            <option value="Plan Change">Plan Change</option>
                            <option value="Cancel Subscription">Cancel Subscription</option>
                        </select>
                        </li>
                        <li>
                        <label htmlFor="msg">Message:</label>
                        <textarea id="msg" name="user_message" defaultValue={""} />
                        </li>
                        <button id="customerFirst" type="button" width={200} height={20} style={{backgroundColor: '#e7e7e7', border: '2px solid black'}}>Submit Request - Customer First</button>
                        <button id="agentFirst" type="button" width={200} height={20} style={{backgroundColor: '#e7e7e7', border: '2px solid black'}}>Submit Request - Agent First</button>
                    </ul>
                    </fieldset>
                    <div id="success-message" />
                    <div id="error-message" />
                    <div id="results-message" />
                </form>
            </div>

        </div>
    )
}

export default click2CallPage
