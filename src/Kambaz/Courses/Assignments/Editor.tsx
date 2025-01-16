export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            {/* Assignment Name */}
            <label htmlFor="wd-name"><strong>Assignment Name</strong></label><br /><br />
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            {/* Description */}
            <textarea id="wd-description" rows={6} cols={50}>
                The assignment is available online. Submit a link to the landing page of
                your Web application running on Netlify. The landing page should include
                the following:
                - Your full name and section
                - Links to each of the lab assignments
                - Link to the Kanbas application
                - Links to all relevant source code repositories
                - The Kanbas application should include a link to navigate back to the
                landing page.
            </textarea>
            <br /><br />
            {/* Points and Assignment Group */}
            <table>
                <tbody>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-points">Points</label>
                        </td>
                        <td>
                            <input id="wd-points" value={100} />
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td align="right" valign="top"><label htmlFor="wd-group">Assignment Group</label></td>
                        <td>
                            <select id="wd-group">
                                <option>ASSIGNMENTS</option>
                                <option>QUIZZES</option>
                                <option>PROJECTS</option>
                            </select>
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td align="right" valign="top"><label htmlFor="wd-grade">Display Grade as</label></td>
                        <td>
                            <select id="wd-grade">
                                <option>Percentage</option>
                                <option>Points</option>
                                <option>Complete/Incomplete</option>
                            </select>
                        </td>
                    </tr>
                    <br />
                    {/* Submission Type */}
                    <tr>
                        <td align="right" valign="top"><label htmlFor="wd-submission-type">Submission Type</label></td>
                        <td>
                            <select id="wd-submission-type">
                                <option>Online</option>
                                <option>On Paper</option>
                                <option>No Submission</option>
                            </select>
                        </td>
                    </tr>
                    <br />
                    {/* Online Entry Options */}
                    <tr>
                        <td align="right" valign="top"></td>
                        <td>
                            <div>
                                Online Entry Options<br></br>
                                <input type="checkbox" id="text-entry" /><label htmlFor="wd-text-entry"> Text Entry</label><br />
                                <input type="checkbox" id="website-url" /><label htmlFor="wd-website-url"> Website URL</label><br />
                                <input type="checkbox" id="media" /><label htmlFor="wd-media- recordings"> Media Recordings</label><br />
                                <input type="checkbox" id="student-annotation" /><label htmlFor="wd-student-annotation"> Student Annotation</label><br />
                                <input type="checkbox" id="file-upload" /><label htmlFor="wd-file-upload"> File Uploads</label>
                            </div>
                        </td>
                    </tr>
                    <br />
                    {/* Assign To Section */}
                    <tr>
                        <td align="right" valign="top"><label htmlFor="wd-assign-to">Assign</label></td>
                        <td>
                            <label htmlFor="wd-assign-to">Assign to</label><br />
                            <input id="wd-assign-to" value="Everyone" />
                            <br /><br />
                        </td>
                    </tr>
                    {/* Due Date and Availability */}
                    <tr>
                        <td align="right" valign="top"></td>
                        <td>
                            <label htmlFor="wd-due-date">Due</label><br />
                            <input id="d-due-date" type="date" value="2024-05-13" />
                            <br /><br />
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top"></td>
                        <td>
                            <label htmlFor="wd-available-from">Available from</label><br />
                            <input id="wd-available-from" type="date" value="2024-05-06" />
                        </td>
                        <td>
                            <label htmlFor="wd-available-until">Until</label><br />
                            <input id="wd-available-until" type="date" value="2024-05-20" />
                            <br />
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr />
            {/* Action Buttons */}
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "10px" }}>
                <button id="wd-cancel">Cancel</button>
                <button id="wd-save">Save</button>
            </div>
        </div>
    );
}
