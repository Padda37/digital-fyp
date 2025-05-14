"use client";

import { useEffect, useState } from "react";
import { db } from "../../../firebase/config";
import { collection, getDocs } from "firebase/firestore";

export default function ProfilePage() {
  const [student, setStudent] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "students"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setStudent(data[0]); // sirf pehla student
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>My Profile</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        <div>
          <strong>Full Name</strong>
          <p>{student?.fullName || "N/A"}</p>
        </div>
        <div>
          <strong>Email</strong>
          <p>{student?.email || "N/A"}</p>
        </div>
        <div>
          <strong>CNIC</strong>
          <p>{student?.cnic || "N/A"}</p>
        </div>
        <div>
          <strong>Department</strong>
          <p>{student?.department || "N/A"}</p>
        </div>
        <div>
          <strong>Registration No</strong>
          <p>{student?.registrationNo || "N/A"}</p>
        </div>
        <div>
          <strong>CGPA</strong>
          <p>{student?.cgpa || "N/A"}</p>
        </div>
        <div style={{ gridColumn: "1 / span 2" }}>
          <strong>Bio</strong>
          <p>{student?.bio || "N/A"}</p>
        </div>
      </div>
    </div>
  );
}