import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';
import Company from './Company';
import CompanyService from '../services/CompanyService.js'

const CompanyList = () => {

    const [ companies, setCompanies ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                setCompanies(await CompanyService.getCompanies());
            } catch (e) {
                console.log('Error fetching data', error);
            } finally {
                setLoading(false);
            }
        };
        fetchCompanies();
    }, []);

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">Companies</h2>
                {loading ? <Spinner loading={loading}/> : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {
                            companies.map((company) => {
                                return <Company company={company} key={company.companyId}/>
                            })
                        }
                    </div>
                )}
            </div>
        </section>
    )
}

export default CompanyList;
