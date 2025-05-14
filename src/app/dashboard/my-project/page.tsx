"use client";

import { useEffect, useState } from "react";
import { db } from "../../../firebase/config";
import { collection, getDocs } from "firebase/firestore";

export default function MyProjectPage() {
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const currentUserEmail = "aamirpadda@gmail.com"; // manually used

        const filtered = querySnapshot.docs.find(
          (doc) => doc.data().studentEmail === currentUserEmail
        );

        if (filtered) {
          setProject({ id: filtered.id, ...filtered.data() });
        }
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchProject();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Final Year Project</h1>
      {project ? (
        <div style={{ marginTop: "20px" }}>
          <p><strong>Title:</strong> {project.title}</p>
          <p><strong>Description:</strong> {project.description}</p>
          <p><strong>Team Members:</strong> {project.teamMembers}</p>
          <p><strong>Supervisor:</strong> {project.supervisor}</p>
        </div>
      ) : (
        <p>No project found for your email.</p>
      )}
    </div>
  );
}