// src/pages/dashboard/BookingsPage.jsx
import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Building,
  Filter,
  Search,
  MoreVertical,
  Edit3,
  Trash2,
  Eye,
  Download,
  Share2,
  Plus,
  CheckCircle,
  XCircle,
  Clock4
} from 'lucide-react';

const BookingsPage = () => {
  const [bookings, setBookings] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBooking, setSelectedBooking] = useState(null);

  useEffect(() => {
    // Simulate data loading
    setBookings([
      {
        id: 1,
        workspace: "Creative Studio A",
        type: "Dedicated Desk",
        date: "2024-01-15",
        startTime: "09:00",
        endTime: "17:00",
        duration: "8 hours",
        status: "confirmed",
        guests: 0,
        price: 85,
        location: "Floor 2, Zone A",
        amenities: ["WiFi", "Monitor", "Whiteboard"],
        bookingRef: "WV001234"
      },
      {
        id: 2,
        workspace: "Meeting Room B",
        type: "Meeting Room",
        date: "2024-01-16",
        startTime: "14:00",
        endTime: "16:00",
        duration: "2 hours",
        status: "pending",
        guests: 4,
        price: 45,
        location: "Floor 1, Conference Wing",
        amenities: ["Projector", "TV", "Phone"],
        bookingRef: "WV001235"
      },
      {
        id: 3,
        workspace: "Focus Pod 3",
        type: "Focus Pod",
        date: "2024-01-14",
        startTime: "10:00",
        endTime: "13:00",
        duration: "3 hours",
        status: "completed",
        guests: 0,
        price: 35,
        location: "Floor 3, Quiet Zone",
        amenities: ["Noise Cancelling", "Privacy"],
        bookingRef: "WV001236"
      },
      {
        id: 4,
        workspace: "Collaboration Hub",
        type: "Team Space",
        date: "2024-01-17",
        startTime: "11:00",
        endTime: "15:00",
        duration: "4 hours",
        status: "cancelled",
        guests: 6,
        price: 120,
        location: "Floor 2, Innovation Wing",
        amenities: ["Whiteboard", "Monitor", "Speaker"],
        bookingRef: "WV001237"
      }
    ]);
  }, []);

  const filteredBookings = bookings.filter(booking => {
    const matchesFilter = filter === 'all' || booking.status === filter;
    const matchesSearch = booking.workspace.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.bookingRef.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusIcon = (status) => {
    switch (status) {
      case 'confirmed': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'pending': return <Clock4 className="w-4 h-4 text-amber-500" />;
      case 'completed': return <CheckCircle className="w-4 h-4 text-blue-500" />;
      case 'cancelled': return <XCircle className="w-4 h-4 text-red-500" />;
      default: return <Clock4 className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-700 border-green-200';
      case 'pending': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'completed': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'cancelled': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const BookingCard = ({ booking }) => (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-blue-100 text-blue-600">
            <Building className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg">{booking.workspace}</h3>
            <p className="text-gray-600 text-sm">{booking.type}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(booking.status)} flex items-center gap-1`}>
            {getStatusIcon(booking.status)}
            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
          </span>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <MoreVertical className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar className="w-4 h-4" />
          <span>{new Date(booking.date).toLocaleDateString('en-US', { 
            weekday: 'short', 
            month: 'short', 
            day: 'numeric' 
          })}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Clock className="w-4 h-4" />
          <span>{booking.startTime} - {booking.endTime}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin className="w-4 h-4" />
          <span>{booking.location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Users className="w-4 h-4" />
          <span>{booking.guests} {booking.guests === 1 ? 'guest' : 'guests'}</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <div>
          <p className="text-2xl font-bold text-gray-900">${booking.price}</p>
          <p className="text-sm text-gray-600">{booking.duration}</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="View Details">
            <Eye className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Edit Booking">
            <Edit3 className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-red-50 rounded-lg transition-colors" title="Cancel Booking">
            <Trash2 className="w-4 h-4 text-red-500" />
          </button>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Reference: {booking.bookingRef}</span>
          <div className="flex items-center gap-4">
            {booking.amenities.slice(0, 3).map((amenity, index) => (
              <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                {amenity}
              </span>
            ))}
            {booking.amenities.length > 3 && (
              <span className="text-gray-500 text-xs">+{booking.amenities.length - 3} more</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Bookings Management</h1>
          <p className="text-gray-600">Manage and track all your workspace reservations</p>
        </div>
        <button className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2">
          <Plus className="w-5 h-5" />
          New Booking
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search bookings by workspace or reference..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {['all', 'confirmed', 'pending', 'completed', 'cancelled'].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  filter === status
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <button className="p-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
              <Filter className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
              <Download className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
              <Share2 className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Bookings', value: '47', change: '+12%', color: 'blue' },
          { label: 'Upcoming', value: '3', change: '+8%', color: 'green' },
          { label: 'Completed', value: '42', change: '+15%', color: 'purple' },
          { label: 'Cancelled', value: '2', change: '-5%', color: 'red' }
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
            <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
            <div className="flex items-end justify-between">
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <span className={`text-sm font-medium ${
                stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bookings Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {filteredBookings.map(booking => (
          <BookingCard key={booking.id} booking={booking} />
        ))}
      </div>

      {/* Empty State */}
      {filteredBookings.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <Calendar className="w-10 h-10 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No bookings found</h3>
          <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors">
            Book Your First Workspace
          </button>
        </div>
      )}
    </div>
  );
};

export default BookingsPage;