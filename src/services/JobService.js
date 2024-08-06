const getJobs = async (limit) => {
    let apiUrl = '/server/api/recruit';
    if (limit && limit > 0) {
        apiUrl += `?pageSize=${limit}`;
    } else {
        apiUrl += '/all';
    }
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
};

const getJob = async ({ params }) => {
    if (!params.recruitId) {
        return {
            'type': 'Full-Time',
            'salary': 'Under $50K',
            'company' : {}
        };
    }
    const response = await fetch(`/server/api/recruit/${params.recruitId}`);
    const data = await response.json();
    return data;
};

const addJob = async (newJob) => {
    const res = await fetch('/server/api/recruit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newJob)
    });
    return res;
};

const editJob = async (job) => {
    const res = await fetch(`/server/api/recruit/${job.recruitId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(job)
    });
    return res;
};

const deleteJob = async (recruitId) => {
    const res = await fetch(`/server/api/recruit/${recruitId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return res;
};

const JobService = {
    getJobs,
    getJob,
    addJob,
    editJob,
    deleteJob
};

export default JobService;