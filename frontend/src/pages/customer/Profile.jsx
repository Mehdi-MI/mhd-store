import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CustomerPages.css';

const DEFAULT_USER = {
  fullName: 'User', email: 'user@example.com',
  phone: '', avatar: null,
  joinedAt: new Date().toISOString(), totalOrders: 0, totalSpent: 0,
};

export default function Profile() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user) || DEFAULT_USER;
  const [form, setForm] = useState({ fullName: user.fullName, email: user.email, phone: user.phone || '' });
  const [editing, setEditing] = useState(false);
  const [saving,  setSaving]  = useState(false);
  const [saved,   setSaved]   = useState(false);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      dispatch({ type: 'auth/updateProfile', payload: form });
      setSaving(false);
      setEditing(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (err) {
      setSaving(false);
    }
  };

  return (
    <div className="cp-page">
      <div className="cp-header">
        <div>
          <span className="section-tag">Account</span>
          <h1 className="cp-title">My <em>Profile</em></h1>
        </div>
        {saved && <div className="cp-success-toast">✓ Profile updated</div>}
      </div>

      {/* Stats */}
      <div className="cp-stats">
        {[
          { label:'Member since', val: new Date(user.joinedAt).toLocaleDateString('en-GB',{month:'long',year:'numeric'}) },
          { label:'Total orders',  val: user.totalOrders },
          { label:'Total spent',   val: `$${user.totalSpent?.toLocaleString() || 0}` },
        ].map(({ label, val }) => (
          <div key={label} className="cp-stat">
            <span className="cp-stat__label">{label}</span>
            <span className="cp-stat__val">{val}</span>
          </div>
        ))}
      </div>

      {/* Avatar section */}
      <div className="cp-card">
        <div className="cp-card__head">
          <h2 className="cp-card__title">Profile Photo</h2>
        </div>
        <div className="cp-avatar-row">
          <div className="cp-avatar">
            {MOCK_USER.avatar
              ? <img src={MOCK_USER.avatar} alt={MOCK_USER.fullName} />
              : <span>{MOCK_USER.fullName.charAt(0)}</span>}
          </div>
          <div>
            <button className="btn-outline cp-btn-sm">Upload Photo</button>
            <p className="cp-hint">JPG, PNG or WebP. Max 2MB.</p>
          </div>
        </div>
      </div>

      {/* Personal info */}
      <div className="cp-card">
        <div className="cp-card__head">
          <h2 className="cp-card__title">Personal Information</h2>
          {!editing && (
            <button className="cp-edit-btn" onClick={() => setEditing(true)}>Edit</button>
          )}
        </div>

        {editing ? (
          <form className="cp-form" onSubmit={handleSave}>
            <div className="cp-form__grid">
              <div className="cp-field">
                <label className="cp-label">Full name</label>
                <input className="cp-input" type="text" value={form.fullName}
                  onChange={e => set('fullName', e.target.value)} />
              </div>
              <div className="cp-field">
                <label className="cp-label">Email address</label>
                <input className="cp-input" type="email" value={form.email}
                  onChange={e => set('email', e.target.value)} />
              </div>
              <div className="cp-field">
                <label className="cp-label">Phone number</label>
                <input className="cp-input" type="tel" value={form.phone}
                  onChange={e => set('phone', e.target.value)} />
              </div>
            </div>
            <div className="cp-form__actions">
              <button type="submit" className="btn-primary cp-btn-sm" disabled={saving}>
                {saving ? 'Saving…' : 'Save Changes'}
              </button>
              <button type="button" className="btn-outline cp-btn-sm"
                onClick={() => { setEditing(false); setForm({ fullName: MOCK_USER.fullName, email: MOCK_USER.email, phone: MOCK_USER.phone }); }}>
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div className="cp-info-grid">
            {[
              { label:'Full name',   val: form.fullName },
              { label:'Email',       val: form.email    },
              { label:'Phone',       val: form.phone || '—' },
            ].map(({ label, val }) => (
              <div key={label} className="cp-info-row">
                <span className="cp-info-label">{label}</span>
                <span className="cp-info-val">{val}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Password */}
      <div className="cp-card">
        <div className="cp-card__head">
          <h2 className="cp-card__title">Password</h2>
          <button className="cp-edit-btn">Change Password</button>
        </div>
        <p className="cp-muted">Last changed 3 months ago</p>
      </div>

      {/* Danger zone */}
      <div className="cp-card cp-card--danger">
        <div className="cp-card__head">
          <h2 className="cp-card__title cp-card__title--danger">Danger Zone</h2>
        </div>
        <p className="cp-muted">Permanently delete your account and all associated data. This action cannot be undone.</p>
        <button className="cp-danger-btn">Delete Account</button>
      </div>
    </div>
  );
}
