import CommonService from './CommonService.js';

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
            'type': 'FULL_TIME',
            'salary': 'UNDER_$50K',
            'company' : {}
        };
    }
    const response = await fetch(`/server/api/recruit/${params.recruitId}`);
    const data = await response.json();

    return data;
};

const addJob = async (newJob) => {
    const tokenValue = CommonService.getAuthToken();
    if (!tokenValue) {
        return {};
    }

    const res = await fetch('/server/admin/recruit/new', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenValue}`
        },
        body: JSON.stringify(newJob)
    });
    return res;
};

const editJob = async (job) => {
    const tokenValue = CommonService.getAuthToken();
    if (!tokenValue) {
        return {};
    }

    const res = await fetch(`/server/admin/recruit/${job.recruitId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenValue}`
        },
        body: JSON.stringify(job)
    });
    return res;
};

const deleteJob = async (recruitId) => {
    const tokenValue = CommonService.getAuthToken();
    if (!tokenValue) {
        return {};
    }

    const res = await fetch(`/server/admin/recruit/${recruitId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenValue}`
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