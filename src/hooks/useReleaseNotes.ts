import { useState, useEffect } from "react";

const useReleaseNotes = (id: string) => {
  const [releaseNotes, setReleaseNotes] = useState("");

  useEffect(() => {
    if (!id) return;

    const fetchReleaseNotes = async () => {
      try {
        const response = await fetch(`/releasenotes/${id.toLowerCase()}.txt`);
        if (!response.ok) throw new Error("Failed to fetch release notes");
        const text = await response.text();
        setReleaseNotes(text);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReleaseNotes();
  }, [id]);

  return releaseNotes;
};

export default useReleaseNotes;
