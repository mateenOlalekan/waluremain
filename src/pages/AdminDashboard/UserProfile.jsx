// src/pages/dashboard/UserProfile.jsx
import React, { useState } from 'react';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Edit3,
  Camera,
  Shield,
  Bell,
  CreditCard,
  Globe,
  Save,
  X,
  CheckCircle,
  Award,
  Star,
  Users,
  Clock
} from 'lucide-react';

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const [userData, setUserData] = useState({
    personal: {
      firstName: 'Alex',
      lastName: 'Morgan',
      email: 'alex.morgan@wavora.com',
      phone: '+1 (555) 123-4567',
      location: 'New York, NY',
      joinDate: '2023-03-15',
      bio: 'Product designer and creative professional passionate about building amazing digital experiences.'
    },
    preferences: {
      notifications: {
        email: true,
        sms: false,
        push: true,
        bookingReminders: true,
        communityUpdates: false
      },
      workspace: {
        favoriteAmenities: ['Monitor', 'Whiteboard', 'Quiet Zone'],
        preferredLocation: 'Creative Studio A',
        autoExtend: true
      }
    },
    membership: {
      plan: 'Premium Pro',
      since: '2023-03-15',
      renewal: '2024-03-15',
      hoursUsed: 284,
      bookings: 47,
      status: 'active'
    }
  });

  const [formData, setFormData] = useState(userData.personal);

  const handleSave = () => {
    setUserData(prev => ({ ...prev, personal: formData }));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(userData.personal);
    setIsEditing(false);
  };

  const TabContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileTab />;
      case 'preferences':
        return <PreferencesTab />;
      case 'membership':
        return <MembershipTab />;
      case 'security':
        return <SecurityTab />;
      default:
        return <ProfileTab />;
    }
  };

  const ProfileTab = () => (
    <div className="space-y-6">
      {/* Personal Information */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Personal Information</h3>
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
            >
              <Edit3 className="w-4 h-4" />
              Edit Profile
            </button>
          )}
        </div>

        {isEditing ? (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
              <textarea
                value={formData.bio}
                onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300"
              />
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                Save Changes
              </button>
              <button
                onClick={handleCancel}
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                <X className="w-4 h-4" />
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoField icon={User} label="Full Name" value={`${userData.personal.firstName} ${userData.personal.lastName}`} />
            <InfoField icon={Mail} label="Email" value={userData.personal.email} />
            <InfoField icon={Phone} label="Phone" value={userData.personal.phone} />
            <InfoField icon={MapPin} label="Location" value={userData.personal.location} />
            <InfoField icon={Calendar} label="Member Since" value={new Date(userData.personal.joinDate).toLocaleDateString()} />
            <InfoField icon={Award} label="Status" value="Premium Member" />
          </div>
        )}
      </div>

      {/* Bio Section */}
      {!isEditing && (
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4">About Me</h3>
          <p className="text-gray-600 leading-relaxed">{userData.personal.bio}</p>
        </div>
      )}
    </div>
  );

  const PreferencesTab = () => (
    <div className="space-y-6">
      {/* Notification Preferences */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Notification Preferences</h3>
        <div className="space-y-4">
          {Object.entries(userData.preferences.notifications).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-blue-300 transition-colors">
              <div>
                <p className="font-semibold text-gray-900 capitalize">{key.replace(/([A-Z])/g, ' $1').toLowerCase()}</p>
                <p className="text-sm text-gray-600">Receive {key.replace(/([A-Z])/g, ' $1').toLowerCase()} notifications</p>
              </div>
              <ToggleSwitch value={value} />
            </div>
          ))}
        </div>
      </div>

      {/* Workspace Preferences */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Workspace Preferences</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
            <div>
              <p className="font-semibold text-gray-900">Preferred Location</p>
              <p className="text-sm text-gray-600">Your favorite workspace area</p>
            </div>
            <span className="text-blue-600 font-semibold">{userData.preferences.workspace.preferredLocation}</span>
          </div>
          <div className="p-4 border border-gray-200 rounded-xl">
            <p className="font-semibold text-gray-900 mb-3">Favorite Amenities</p>
            <div className="flex flex-wrap gap-2">
              {userData.preferences.workspace.favoriteAmenities.map((amenity, index) => (
                <span key={index} className="px-3 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium">
                  {amenity}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const MembershipTab = () => (
    <div className="space-y-6">
      {/* Current Plan */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold mb-2">Premium Pro Plan</h3>
            <p className="text-purple-100">Unlimited access to all premium features</p>
          </div>
          <Award className="w-12 h-12 text-white opacity-80" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <StatItem icon={Clock} label="Hours Used" value={userData.membership.hoursUsed} />
          <StatItem icon={Calendar} label="Bookings" value={userData.membership.bookings} />
          <StatItem icon={Star} label="Member Since" value={new Date(userData.membership.since).getFullYear()} />
          <StatItem icon={Users} label="Status" value="Active" />
        </div>
      </div>

      {/* Plan Details */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Plan Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <DetailItem label="Current Plan" value={userData.membership.plan} />
            <DetailItem label="Renewal Date" value={new Date(userData.membership.renewal).toLocaleDateString()} />
            <DetailItem label="Billing Cycle" value="Monthly" />
          </div>
          <div className="space-y-4">
            <DetailItem label="Plan Status" value="Active" status="active" />
            <DetailItem label="Next Payment" value="$149.00" />
            <DetailItem label="Payment Method" value="•••• •••• •••• 4242" />
          </div>
        </div>
      </div>

      {/* Upgrade Options */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Available Upgrades</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: 'Enterprise', price: '$299', features: ['All Premium features', 'Dedicated desk', '24/7 access'] },
            { name: 'Team Plan', price: '$199', features: ['Up to 5 members', 'Shared workspace', 'Meeting room credits'] },
            { name: 'Student', price: '$79', features: ['Basic access', 'Limited hours', 'Community events'] }
          ].map((plan, index) => (
            <div key={index} className="border-2 border-gray-200 rounded-xl p-6 hover:border-purple-500 transition-colors group">
              <h4 className="font-bold text-gray-900 text-lg mb-2">{plan.name}</h4>
              <p className="text-2xl font-bold text-gray-900 mb-4">{plan.price}<span className="text-sm text-gray-600 font-normal">/month</span></p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-colors">
                Upgrade Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const SecurityTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Security Settings</h3>
        <div className="space-y-4">
          <SecurityItem 
            title="Two-Factor Authentication" 
            description="Add an extra layer of security to your account"
            status="Enabled"
            action="Manage"
          />
          <SecurityItem 
            title="Login Activity" 
            description="Review your recent login history"
            status="Last login: 2 hours ago"
            action="View"
          />
          <SecurityItem 
            title="Connected Devices" 
            description="Manage devices that have access to your account"
            status="3 devices"
            action="Manage"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 lg:w-1/3">
          <div className="text-center">
            <div className="relative inline-block mb-4">
              <img
                src="/api/placeholder/120/120"
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <button className="absolute bottom-2 right-2 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              {userData.personal.firstName} {userData.personal.lastName}
            </h2>
            <p className="text-gray-600 mb-4">Premium Member</p>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                ))}
              </div>
              <span className="text-sm text-gray-600">4.8 rating</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 lg:flex-1">
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              { id: 'profile', label: 'Profile', icon: User },
              { id: 'preferences', label: 'Preferences', icon: Bell },
              { id: 'membership', label: 'Membership', icon: CreditCard },
              { id: 'security', label: 'Security', icon: Shield }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
          <TabContent />
        </div>
      </div>
    </div>
  );
};

// Helper Components
const InfoField = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl hover:border-blue-300 transition-colors">
    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
      <Icon className="w-4 h-4" />
    </div>
    <div>
      <p className="text-sm text-gray-600">{label}</p>
      <p className="font-semibold text-gray-900">{value}</p>
    </div>
  </div>
);

const ToggleSwitch = ({ value }) => (
  <div className={`w-12 h-6 rounded-full transition-colors duration-300 relative cursor-pointer ${
    value ? 'bg-green-500' : 'bg-gray-300'
  }`}>
    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
      value ? 'transform translate-x-7' : 'transform translate-x-1'
    }`} />
  </div>
);

const StatItem = ({ icon: Icon, label, value }) => (
  <div className="text-center">
    <Icon className="w-8 h-8 mx-auto mb-2 text-white opacity-90" />
    <p className="text-2xl font-bold">{value}</p>
    <p className="text-purple-100 text-sm">{label}</p>
  </div>
);

const DetailItem = ({ label, value, status }) => (
  <div className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
    <span className="text-gray-600">{label}</span>
    <span className={`font-semibold ${
      status === 'active' ? 'text-green-600' : 'text-gray-900'
    }`}>
      {value}
    </span>
  </div>
);

const SecurityItem = ({ title, description, status, action }) => (
  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-blue-300 transition-colors">
    <div>
      <p className="font-semibold text-gray-900">{title}</p>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
    <div className="flex items-center gap-4">
      <span className="text-sm text-gray-600">{status}</span>
      <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
        {action}
      </button>
    </div>
  </div>
);

export default UserProfile;