const getCompanies = async () => {
    const response: Response = await fetch('/server/api/recruit/companies');
    const data: JSON = await response.json();
    return data;
};

const CompanyService = {
    getCompanies
};

export default CompanyService;