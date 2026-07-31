import {
  FaCalendarCheck,
  FaFlask,
  FaUserInjured,
} from "react-icons/fa";

import "./RecentActivity.css";

function RecentActivity({ appointments = [], labTests = [] }) {

  const activities = [];

  appointments.slice(-3).reverse().forEach((appointment) => {
    activities.push({
      icon: <FaCalendarCheck />,
      color: "#0d6efd",
      title: "Appointment Booked",
      description: `${appointment.patientName} with ${appointment.doctorName}`,
      time: appointment.appointmentDate,
    });
  });

  labTests.slice(-3).reverse().forEach((test) => {
    activities.push({
      icon: <FaFlask />,
      color: "#20c997",
      title: "Lab Test Added",
      description: `${test.patientName} - ${test.testName}`,
      time: test.testDate,
    });
  });

  activities.sort((a, b) => String(b.time).localeCompare(String(a.time)));

  return (
    <div className="activity-card">

      <h3>Recent Activity</h3>

      {activities.length === 0 ? (

        <div className="empty-activity">

          <FaUserInjured />

          <p>No Recent Activity</p>

        </div>

      ) : (

        activities.map((activity, index) => (

          <div
            className="activity-item"
            key={index}
          >

            <div
              className="activity-icon"
              style={{
                background: activity.color,
              }}
            >
              {activity.icon}
            </div>

            <div className="activity-content">

              <h5>{activity.title}</h5>

              <p>{activity.description}</p>

            </div>

            <span className="activity-time">
              {activity.time}
            </span>

          </div>

        ))

      )}

    </div>
  );
}

export default RecentActivity;