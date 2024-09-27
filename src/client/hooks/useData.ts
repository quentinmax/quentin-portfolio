import { useEffect, useMemo, useState } from "react";
import { client } from "../sanityClient";

const useData = () => {
  const [projects, setProjects] = useState<Array<Project>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    client
      .fetch(
        `
            *[_type == "project"]{
                name,
                description,
                services,
                tags,
                slug,
                projectType,
                thumb{
                    asset->{
                        _id,
                        url
                    },
                    alt
                },
                year,
            }
        `
      )
      .then((data) => setProjects(data))
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  const memoedValues: { projects: Project[]; loading: boolean; error: any } =
    useMemo(
      () => ({
        projects: projects,
        loading: loading,
        error: error,
      }),
      [projects, loading, error]
    );

  return memoedValues;
};

export default useData;
