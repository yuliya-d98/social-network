import clsx from 'clsx';
import React, { useState } from "react";
import defaultAvatar from '../../../../assets/user-avatar.png';
import Preloader from "../../../common/preloader";
import formStyle from './../../../common/forms-controls/forms-controls.module.css';
import ProfileDataForm from "./profile-data-form";
import ProfileStatusWithHooks from "./profile-status-with-hooks";
import s from './user.module.css';

// const bestAvatarEver = 'https://sib.fm/storage/article/April2021/Kb1KiTYol9I62IHiyBgV.jpeg';


const UserLink = ({ href }) => {
    return (
        <i>{href ? <a href={href} target='_blank' rel="noreferrer">{href}</a> : 'no link'}</i>
    )
}

const ProfileData = ({ profile, status, updateStatus, isOwner, toEditMode }) => {
    return (
        <div>
            <h2 className={s.header}>{profile.fullName}</h2>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} isOwner={isOwner} />
            <div className={s.aboutUser}>
                <p>About me: <i>{profile.aboutMe || 'no info'}</i></p>
                <p>Looking for a job: <i>{profile.lookingForAJob ? 'yes' : 'no'}</i></p>
                {profile.lookingForAJob && <p>My professional skills: <i>{profile.lookingForAJobDescription || 'no description'}</i></p>}
            </div>
            <div className={s.contacts}>
                <p>Contacts:</p>
                {Object.keys(profile.contacts).map(link => <p key={link}>{link}: <UserLink href={profile.contacts[link]} /></p>)}
            </div>
            {isOwner && <button onClick={toEditMode} className={clsx(formStyle.button, s.button)}>Edit</button>}
        </div>
    )
}

const User = ({ profile, status, updateStatus, isOwner, savePhoto, setProfileData }) => {
    const [editMode, setEditMode] = useState(false);

    const toEditMode = () => setEditMode(true);

    const fromEditMode = () => setEditMode(false);

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        setProfileData(formData).then(() => fromEditMode());
    }

    return (
        <div className={s.user}>
            <div className={s.avatar}>
                <img className={s.image} src={profile.photos.large || defaultAvatar} alt="user" />
                {isOwner && <input className={s.input} type='file' onChange={onMainPhotoSelected} id='photo' />}
                {isOwner && <label className={s.label} htmlFor="photo">Choose photo</label>}
            </div>
            {editMode
                ? <ProfileDataForm initialValues={profile} fromEditMode={fromEditMode} onSubmit={onSubmit} profile={profile} />
                : <ProfileData profile={profile} status={status} updateStatus={updateStatus} isOwner={isOwner} toEditMode={toEditMode} />}
        </div>
    )
}


export default User;