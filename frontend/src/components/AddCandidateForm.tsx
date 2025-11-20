import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { addCandidate } from '../services/candidateService';
import './AddCandidateForm.css';

const AddCandidateForm: React.FC = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        education: '',
        workExperience: '',
    });
    const [cvFile, setCvFile] = useState<File | null>(null);
    const [message, setMessage] = useState<string | null>(null);
    const [isError, setIsError] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setCvFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage(null);
        setIsError(false);

        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            data.append(key, value);
        });
        if (cvFile) {
            data.append('cv', cvFile);
        }

        try {
            await addCandidate(data);
            setMessage(t('successMessage'));
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                address: '',
                education: '',
                workExperience: '',
            });
            setCvFile(null);
        } catch (error) {
            console.error(error);
            setMessage(t('errorMessage'));
            setIsError(true);
        }
    };

    return (
        <div className="add-candidate-form">
            <h2>{t('addCandidate')}</h2>
            {message && (
                <div className={`message ${isError ? 'error' : 'success'}`}>
                    {message}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>{t('firstName')}</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>{t('lastName')}</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>{t('email')}</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>{t('phone')}</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="form-group full-width">
                    <label>{t('address')}</label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} />
                </div>
                <div className="form-group full-width">
                    <label>{t('education')}</label>
                    <textarea name="education" value={formData.education} onChange={handleChange} />
                </div>
                <div className="form-group full-width">
                    <label>{t('workExperience')}</label>
                    <textarea name="workExperience" value={formData.workExperience} onChange={handleChange} />
                </div>
                <div className="form-group full-width">
                    <label>{t('cv')}</label>
                    <input type="file" accept=".pdf,.docx" onChange={handleFileChange} />
                </div>
                <button type="submit">{t('submit')}</button>
            </form>
        </div>
    );
};

export default AddCandidateForm;
